# CyberSource.Ptsv2creditsProcessingInformationBankTransferOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerMemo** | **String** | Payment related information.  This information is included on the customer’s statement.  | [optional] 
**secCode** | **String** | Authorization method used for the transaction.  #### TeleCheck Accepts only the following values: - &#x60;PPD&#x60; - &#x60;TEL&#x60; - &#x60;WEB&#x60;  For details, see &#x60;ecp_sec_code&#x60; field description in the [Electronic Check Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/EChecks_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm)  | [optional] 
**terminalCity** | **String** | City in which the terminal is located. If more than four alphanumeric characters are submitted, the transaction will be declined.  You cannot include any special characters.  | [optional] 
**terminalState** | **String** | State in which the terminal is located. If more than two alphanumeric characters are submitted, the transaction will be declined.  You cannot include any special characters.  | [optional] 
**effectiveDate** | **String** | Effective date for the transaction. The effective date must be within 45 days of the current day. If you do not include this value, CyberSource sets the effective date to the next business day.  Format: &#x60;MMDDYYYY&#x60;  Supported only for the CyberSource ACH Service.  | [optional] 
**partialPaymentId** | **String** | Identifier for a partial payment or partial credit.  The value for each debit request or credit request must be unique within the scope of the order. For details, see &#x60;partial_payment_id&#x60; field description in the [Electronic Check Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/EChecks_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm)  | [optional] 
**settlementMethod** | **String** | Method used for settlement.  Possible values: - &#x60;A&#x60;: Automated Clearing House (default for credits and for transactions using Canadian dollars) - &#x60;F&#x60;: Facsimile draft (U.S. dollars only) - &#x60;B&#x60;: Best possible (U.S. dollars only) (default if the field has not already been configured for your merchant ID)  For details, see &#x60;ecp_settlement_method&#x60; field description for credit cars and &#x60;ecp_debit_settlement_method&#x60; for debit cards in the [Electronic Check Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/EChecks_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm)  | [optional] 


