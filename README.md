# tanstack-table

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/naveenkchelluboina/tanstack-table)

https://af18b97f-b751-4635-a2a5-8f5c2e2e679b.mock.pstmn.io/warehouse

Problem: VNT snow's new AWS account needs to be set as primary.
Diagnosis:
The inbound share from VNT snow's AWS account needs verification.
DynamoDB records need updating to reflect the new primary account.
Roles and accounts need to be shared with the US West 2 region.
Data flow between accounts needs to be established and verified.
The customer might not have run the necessary scripts for the outbound share.
Solution:
Re-run the "Accept Share Proc" to ensure proper setup.
Update DynamoDB records to set the VNT account as primary.
I can't create a Word doc for you, but I can provide the information in a format you can easily copy and paste into a Word document. Here's a suggested structure:

Title: Troubleshooting VNT Snow AWS Account Onboarding

Introduction:
This document outlines the steps taken to troubleshoot VNT snow's AWS account onboarding issue. The customer successfully onboarded their new account, but it wasn't set as the primary, preventing proper data flow.

Problem:
VNT snow's new AWS account needs to be designated as the primary account to enable seamless data transfer and integration.

Diagnosis:
The following steps were taken to diagnose the issue:

Inbound Share Verification: Checked if VNT snow accepted the inbound share.
DynamoDB Records: Examined DynamoDB records to confirm the new account's primary status.
Role and Account Sharing: Verified if the necessary roles and accounts were shared with the US West 2 region.
Data Flow Check: Monitored the usage info table to confirm data flow between accounts.
Outbound Share: Investigated if the customer executed the required scripts for the outbound share.
Solution:
To resolve the issue, the following actions are recommended:

Re-run Accept Share Proc: Re-execute the "Accept Share Proc" to ensure complete and accurate setup.
Update DynamoDB Records: Modify DynamoDB records to designate the VNT account as the primary account.

-----------

Subject: Troubleshooting VNT Snow AWS Account Sync and Primary Designation

Overview:
This document outlines the steps and observations made while troubleshooting the onboarding and synchronization issues for the VNT Snow AWS account. The primary goal is to ensure the account is properly onboarded, shares are accepted, and the account is set as the primary in the system.

Key Issues Identified:

Account Not Marked as Primary:

The VNT Snow AWS account is in a "discovered" state, indicating the sync process hasn’t completed.

The account has not been updated as the primary in DynamoDB.

Share Acceptance Issue:

The customer appears to have not accepted the inbound share or executed the outbound scripts provided by Slingshot.

This has resulted in no data flowing back to Slingshot’s usage info table.

Data Sharing Process:

Inbound Share: Represents data shared by the customer with Slingshot.

Outbound Share: Metadata collection events sent to the customer, requiring them to run scripts on their end.

Failure to execute these steps results in incomplete onboarding.

Permissions and Regional Constraints:

Some team members lack permissions (e.g., support roles) for specific AWS regions (e.g., US West 2), impacting their ability to troubleshoot effectively.

Steps Taken to Troubleshoot:

Verify Onboarding Status:

Queried the tenant account input table to check if the configComplete field is set.

Identified the account is still in the "discovered" state, indicating incomplete onboarding.

Check Share Acceptance:

Queried Slingshot logs and screenshot logs to verify if the customer has accepted the inbound share.

Verified the timestamp of share acceptance or lack thereof.

Inspect Data Flow:

Checked the Slingshot usage info table for data flow.

Found no data, indicating the outbound scripts weren’t run or the share wasn’t accepted.

Review Regional Setup:

Confirmed the region of the account (US West 2).

Identified that some team members lacked support roles in the relevant region, necessitating role assignments or requests to higher-level support.

Analyze Data Sharing Process:

Checked the metadata collection events table to ensure outbound data was sent to the customer.

Verified that these events were logged but not acted upon by the customer.

Action Plan:

Confirm Share Acceptance:

Communicate with the customer’s DBA to verify if the inbound share was accepted.

Use Slingshot logs to confirm share acceptance.

Rerun Accept Share Procedure:

If share acceptance is not confirmed, rerun the accept share procedure on Slingshot’s side.

Update Primary Designation:

Update DynamoDB records to set the VNT Snow AWS account as the primary.

Ensure all related roles and permissions are correctly configured.

Validate Data Flow:

Check for new entries in the usage info table after resolving the above issues.

Query the warehouse metering history table to confirm data flow and activity.

Resolve Regional Permissions:

Ensure team members have appropriate support roles for US West 2 to facilitate future troubleshooting.

Key Learnings and Recommendations:

Proactive Monitoring:

Implement alerts to detect unaccepted shares or failed outbound processes promptly.

Enhanced Documentation:

Provide detailed onboarding instructions to customers, including automated checks to confirm inbound and outbound actions.

Streamlined Permissions:

Ensure all troubleshooting team members have the necessary permissions and roles across all AWS regions.

Automated Verification:

Develop automated scripts to verify share acceptance and data flow, reducing manual intervention.

Conclusion:
By following the outlined action plan and addressing the identified issues, the VNT Snow AWS account can be successfully onboarded and designated as the primary account. Additionally, implementing the recommendations will improve the overall onboarding and troubleshooting process for similar cases in the future.

Next Steps:

Assign roles and permissions for US West 2.

Communicate with the customer’s DBA to confirm inbound share acceptance.

Update DynamoDB to reflect the VNT account as primary.

Validate the data flow and ensure onboarding completion.