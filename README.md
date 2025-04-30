# tanstack-table

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/naveenkchelluboina/tanstack-table)

https://af18b97f-b751-4635-a2a5-8f5c2e2e679b.mock.pstmn.io/warehouse


Hey Team,

We discussed the RGA tenant's reported high estimated savings (~50%) in Slingshot Warehouse Daily and are currently investigating possible root causes.

Findings so far:
✅ The savings data originates from Slingshot Warehouse Daily which pulls from warehouse_usage_daily and value_realization_cost.
✅ No major updates to the script in the past two years, making upstream changes or warehouse-related factors more likely.
✅ Potential issues could be:

Inactive warehouses being included in savings calculations.
Customer changing their warehouse usage pattern after November.
An upstream process change affecting cost calculations.
Next Steps:
🔹 Validate if inactive warehouses are included.
🔹 Check if the customer's warehouse usage changed in October-November.
🔹 Investigate potential upstream changes that could be impacting savings estimates.
🔹 Backtrack SQL logic if required to isolate discrepancies.

-- ❄️ 1. pick a warehouse and disable result-caching
USE WAREHOUSE XSMALL_WH;
ALTER SESSION SET USE_CACHED_RESULT = FALSE;

-- ❄️ 2. create a fixed sample (50 000 rows here)
CREATE OR REPLACE TEMP TABLE query_sample AS
SELECT  query_id, query_text
FROM    SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY
WHERE   query_text IS NOT NULL
ORDER   BY start_time DESC
LIMIT   50000;

-- ❄️ 3. run SQL-UDF and remember its query-id
SELECT COUNT(*) FROM (
  SELECT REDACT_QUERY_TEXT_SQL(query_text) 
  FROM   query_sample
);
SET sql_qid = LAST_QUERY_ID();

-- ❄️ 4. run JS-UDF and remember its query-id
SELECT COUNT(*) FROM (
  SELECT REDACT_QUERY_TEXT_JAVASCRIPT_ARGSONLY(query_text)
  FROM   query_sample
);
SET js_qid  = LAST_QUERY_ID();

-- ❄️ 5. pull metrics for both runs
WITH q AS (
  SELECT * 
  FROM   INFORMATION_SCHEMA.QUERY_HISTORY
  WHERE  query_id IN ($sql_qid, $js_qid)
)
SELECT
    CASE WHEN query_id = $sql_qid THEN 'SQL UDF'
         ELSE 'JS UDF' END                    AS udf_version,
    total_elapsed_time/1000                  AS elapsed_sec,
    execution_time/1000                      AS exec_sec,
    compilation_time/1000                    AS compile_sec,
    bytes_scanned/1048576                    AS mb_scanned,
    warehouse_size
FROM q
ORDER BY udf_version;
