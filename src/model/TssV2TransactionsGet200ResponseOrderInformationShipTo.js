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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsGet200ResponseOrderInformationShipTo = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponseOrderInformationShipTo model module.
   * @module model/TssV2TransactionsGet200ResponseOrderInformationShipTo
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponseOrderInformationShipTo</code>.
   * @alias module:model/TssV2TransactionsGet200ResponseOrderInformationShipTo
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponseOrderInformationShipTo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponseOrderInformationShipTo} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponseOrderInformationShipTo} The populated <code>TssV2TransactionsGet200ResponseOrderInformationShipTo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('address2')) {
        obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
      }
      if (data.hasOwnProperty('locality')) {
        obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
      }
      if (data.hasOwnProperty('administrativeArea')) {
        obj['administrativeArea'] = ApiClient.convertToType(data['administrativeArea'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * First name of the recipient.  **Processor specific maximum length**  - Litle: 25 - All other processors: 60 
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Last name of the recipient.  **Processor-specific maximum length**  - Litle: 25 - All other processors: 60 
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * First line of the shipping address.
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * Second line of the shipping address.
   * @member {String} address2
   */
  exports.prototype['address2'] = undefined;
  /**
   * City of the shipping address.
   * @member {String} locality
   */
  exports.prototype['locality'] = undefined;
  /**
   * State or province of the billing address. Use the State, Province, and Territory Codes for the United States and Canada.  For Payouts: This field may be sent only for FDC Compass.  ##### CyberSource through VisaNet Credit card networks cannot process transactions that contain non-ASCII characters. CyberSource through VisaNet accepts and stores non-ASCII characters correctly and displays them correctly in reports. However, the limitations of the credit card networks prevent CyberSource through VisaNet from transmitting non-ASCII characters to the credit card networks. Therefore, CyberSource through VisaNet replaces non-ASCII characters with meaningless ASCII characters for transmission to the credit card networks.  **Important** It is your responsibility to determine whether a field is required for the transaction you are requesting.  For processor-specific information, see the `bill_state` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} administrativeArea
   */
  exports.prototype['administrativeArea'] = undefined;
  /**
   * Postal code for the shipping address. The postal code must consist of 5 to 9 digits.  When the billing country is the U.S., the 9-digit postal code must follow this format: [5 digits][dash][4 digits]  Example 12345-6789  When the billing country is Canada, the 6-digit postal code must follow this format: [alpha][numeric][alpha][space][numeric][alpha][numeric]  Example A1B 2C3  **American Express Direct**\\ Before sending the postal code to the processor, CyberSource removes all nonalphanumeric characters and, if the remaining value is longer than nine characters, truncates the value starting from the right side. 
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * Name of the customer’s company.  For processor-specific information, see the company_name field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * Country of the shipping address. Use the two-character ISO Standard Country Codes.
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Phone number associated with the shipping address.
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;



  return exports;
}));


