# tanstack-table

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/naveenkchelluboina/tanstack-table)

Incident ID	Team	Date	Summary	Status	Root Cause	Resolution	Related Links
INC-001	Mercury	2024-01-08	Snowflake timestamp issue	Resolved	Schema mismatch	Fixed schema config	Detailed Report
INC-002	Neptune	2024-01-06	Stream staleness	In Progress	API timeout issue	Pending	Stream Issue

Unmanaged vs. Managed Warehouses:

Unmanaged warehouses flow through specific processes before becoming managed.
The conversation focused on unmanaged warehouses and their representation in views like External Warehouse View and Sync Unmanaged Warehouse View.
Renaming Warehouses:

Renamed warehouses might re-enter the system through the unassigned flow.
If a renamed warehouse hasn’t been used post-rename, it won’t appear in certain views due to the lack of associated events.
Data Sources and Synchronization:

Account Warehouse Info: Tracks all warehouses at the account level but doesn’t represent customer-side usage.
External Warehouse View: Derived from the Slingshot.Warehouse table, which depends on warehouse events history.
Warehouse Metering History: Tracks warehouse activity and usage. Warehouses without recent usage might be excluded.
Logs and Tasks:

SF2DBB Batch Sync Log: Records sync failures or successes and serves as a reference for debugging.
Tasks like Get Unassigned Warehouses Batch Task manage the flow of unassigned warehouses, but permissions issues might restrict visibility.
Filtering Logic:

No explicit filtering for warehouses older than six months.
Warehouses must have an event within two years to be considered for UI.
New customers only retrieve one year of history during onboarding.
Investigation Findings:

Medium warehouses were found in DynamoDB and had recent activity.
Small and extra-small warehouses were not in DynamoDB and showed outdated activity in metering history.
Missing data in Warehouse Events History might explain why some warehouses are excluded.
Corruption and Permissions:

There was a concern about potential corruption in DynamoDB, which could explain missing records.
Permissions issues might prevent access to tasks or data required for troubleshooting.
Main Issue:
The root issue is that some warehouses, particularly renamed or inactive ones, are not appearing in External Warehouse View or other parts of the system. This could be due to:

Lack of recent events or usage data.
Data pull issues or corruption in DynamoDB.
Logic that excludes warehouses based on activity or history.
Next Steps:
Query Warehouse Events History to check for event data for missing warehouses.
Use Warehouse Metering History to verify recent activity.
Investigate DynamoDB for potential corruption or missing records.
Confirm permissions for accessing all relevant tasks and views.
Reevaluate onboarding limitations to ensure historical data isn’t lost.