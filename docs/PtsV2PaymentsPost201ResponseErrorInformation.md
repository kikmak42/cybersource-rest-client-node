# CyberSource.PtsV2PaymentsPost201ResponseErrorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | The reason of the status.  Possible values:  - AVS_FAILED  - CONTACT_PROCESSOR  - EXPIRED_CARD  - PROCESSOR_DECLINED  - INSUFFICIENT_FUND  - STOLEN_LOST_CARD  - ISSUER_UNAVAILABLE  - UNAUTHORIZED_CARD  - CVN_NOT_MATCH  - EXCEEDS_CREDIT_LIMIT  - INVALID_CVN  - DECLINED_CHECK  - BLACKLISTED_CUSTOMER  - SUSPENDED_ACCOUNT  - PAYMENT_REFUSED  - CV_FAILED  - INVALID_ACCOUNT  - GENERAL_DECLINE  - INVALID_MERCHANT_CONFIGURATION  - DECISION_PROFILE_REJECT  - SCORE_EXCEEDS_THRESHOLD  - PENDING_AUTHENTICATION  | [optional] 
**message** | **String** | The detail message related to the status and reason listed above. | [optional] 
**details** | [**[PtsV2PaymentsPost201ResponseErrorInformationDetails]**](PtsV2PaymentsPost201ResponseErrorInformationDetails.md) |  | [optional] 


<a name="ReasonEnum"></a>
## Enum: ReasonEnum


* `AVS_FAILED` (value: `"AVS_FAILED"`)

* `CONTACT_PROCESSOR` (value: `"CONTACT_PROCESSOR"`)

* `EXPIRED_CARD` (value: `"EXPIRED_CARD"`)

* `PROCESSOR_DECLINED` (value: `"PROCESSOR_DECLINED"`)

* `INSUFFICIENT_FUND` (value: `"INSUFFICIENT_FUND"`)

* `STOLEN_LOST_CARD` (value: `"STOLEN_LOST_CARD"`)

* `ISSUER_UNAVAILABLE` (value: `"ISSUER_UNAVAILABLE"`)

* `UNAUTHORIZED_CARD` (value: `"UNAUTHORIZED_CARD"`)

* `CVN_NOT_MATCH` (value: `"CVN_NOT_MATCH"`)

* `EXCEEDS_CREDIT_LIMIT` (value: `"EXCEEDS_CREDIT_LIMIT"`)

* `INVALID_CVN` (value: `"INVALID_CVN"`)

* `DECLINED_CHECK` (value: `"DECLINED_CHECK"`)

* `BLACKLISTED_CUSTOMER` (value: `"BLACKLISTED_CUSTOMER"`)

* `SUSPENDED_ACCOUNT` (value: `"SUSPENDED_ACCOUNT"`)

* `PAYMENT_REFUSED` (value: `"PAYMENT_REFUSED"`)

* `CV_FAILED` (value: `"CV_FAILED"`)

* `INVALID_ACCOUNT` (value: `"INVALID_ACCOUNT"`)

* `GENERAL_DECLINE` (value: `"GENERAL_DECLINE"`)

* `INVALID_MERCHANT_CONFIGURATION` (value: `"INVALID_MERCHANT_CONFIGURATION"`)

* `DECISION_PROFILE_REJECT` (value: `"DECISION_PROFILE_REJECT"`)

* `SCORE_EXCEEDS_THRESHOLD` (value: `"SCORE_EXCEEDS_THRESHOLD"`)

* `PENDING_AUTHENTICATION` (value: `"PENDING_AUTHENTICATION"`)




