/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TssV2TransactionsGet200ResponsePaymentInformationBankAccount', 'model/TssV2TransactionsGet200ResponsePaymentInformationBankMandate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TssV2TransactionsGet200ResponsePaymentInformationBankAccount'), require('./TssV2TransactionsGet200ResponsePaymentInformationBankMandate'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBank = factory(root.CyberSource.ApiClient, root.CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBankAccount, root.CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBankMandate);
  }
}(this, function(ApiClient, TssV2TransactionsGet200ResponsePaymentInformationBankAccount, TssV2TransactionsGet200ResponsePaymentInformationBankMandate) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponsePaymentInformationBank model module.
   * @module model/TssV2TransactionsGet200ResponsePaymentInformationBank
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponsePaymentInformationBank</code>.
   * @alias module:model/TssV2TransactionsGet200ResponsePaymentInformationBank
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponsePaymentInformationBank</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponsePaymentInformationBank} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponsePaymentInformationBank} The populated <code>TssV2TransactionsGet200ResponsePaymentInformationBank</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('routingNumber')) {
        obj['routingNumber'] = ApiClient.convertToType(data['routingNumber'], 'String');
      }
      if (data.hasOwnProperty('branchCode')) {
        obj['branchCode'] = ApiClient.convertToType(data['branchCode'], 'String');
      }
      if (data.hasOwnProperty('swiftCode')) {
        obj['swiftCode'] = ApiClient.convertToType(data['swiftCode'], 'String');
      }
      if (data.hasOwnProperty('bankCode')) {
        obj['bankCode'] = ApiClient.convertToType(data['bankCode'], 'String');
      }
      if (data.hasOwnProperty('iban')) {
        obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
      }
      if (data.hasOwnProperty('account')) {
        obj['account'] = TssV2TransactionsGet200ResponsePaymentInformationBankAccount.constructFromObject(data['account']);
      }
      if (data.hasOwnProperty('mandate')) {
        obj['mandate'] = TssV2TransactionsGet200ResponsePaymentInformationBankMandate.constructFromObject(data['mandate']);
      }
    }
    return obj;
  }

  /**
   * Bank routing number. This is also called the transit number.  For details, see `ecp_rdfi` field description in the [Electronic Check Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/EChecks_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm) 
   * @member {String} routingNumber
   */
  exports.prototype['routingNumber'] = undefined;
  /**
   * Code used to identify the branch of the customer’s bank. Required for some countries if you do not or are not allowed to provide the IBAN. Use this field only when scoring a direct debit transaction.  For all possible values, see the `branch_code` field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** > **Documentation** > **Guides** > _Decision Manager Using the SCMP API Developer Guide_ (PDF link). 
   * @member {String} branchCode
   */
  exports.prototype['branchCode'] = undefined;
  /**
   * Bank’s SWIFT code. You can use this field only when scoring a direct debit transaction. Required only for crossborder transactions.  For all possible values, see the `bank_swiftcode` field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** > **Documentation** > **Guides** > _Decision Manager Using the SCMP API Developer Guide_ (PDF link). 
   * @member {String} swiftCode
   */
  exports.prototype['swiftCode'] = undefined;
  /**
   * Country-specific code used to identify the customer’s bank. Required for some countries if you do not or are not allowed to provide the IBAN instead. You can use this field only when scoring a direct debit transaction.  For all possible values, see the `bank_code` field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** > **Documentation** > **Guides** > _Decision Manager Using the SCMP API Developer Guide_ (PDF link). 
   * @member {String} bankCode
   */
  exports.prototype['bankCode'] = undefined;
  /**
   * International Bank Account Number (IBAN) for the bank account. For some countries you can provide this number instead of the traditional bank account information. You can use this field only when scoring a direct debit transaction.  For all possible values, see the `bank_iban` field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** > **Documentation** > **Guides** > _Decision Manager Using the SCMP API Developer Guide_ (PDF link). 
   * @member {String} iban
   */
  exports.prototype['iban'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponsePaymentInformationBankAccount} account
   */
  exports.prototype['account'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponsePaymentInformationBankMandate} mandate
   */
  exports.prototype['mandate'] = undefined;



  return exports;
}));


