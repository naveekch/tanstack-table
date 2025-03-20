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

