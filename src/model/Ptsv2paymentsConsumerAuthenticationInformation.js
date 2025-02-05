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
    root.CyberSource.Ptsv2paymentsConsumerAuthenticationInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsConsumerAuthenticationInformation model module.
   * @module model/Ptsv2paymentsConsumerAuthenticationInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsConsumerAuthenticationInformation</code>.
   * @alias module:model/Ptsv2paymentsConsumerAuthenticationInformation
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Ptsv2paymentsConsumerAuthenticationInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsConsumerAuthenticationInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsConsumerAuthenticationInformation} The populated <code>Ptsv2paymentsConsumerAuthenticationInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cavv')) {
        obj['cavv'] = ApiClient.convertToType(data['cavv'], 'String');
      }
      if (data.hasOwnProperty('cavvAlgorithm')) {
        obj['cavvAlgorithm'] = ApiClient.convertToType(data['cavvAlgorithm'], 'String');
      }
      if (data.hasOwnProperty('eciRaw')) {
        obj['eciRaw'] = ApiClient.convertToType(data['eciRaw'], 'String');
      }
      if (data.hasOwnProperty('paresStatus')) {
        obj['paresStatus'] = ApiClient.convertToType(data['paresStatus'], 'String');
      }
      if (data.hasOwnProperty('veresEnrolled')) {
        obj['veresEnrolled'] = ApiClient.convertToType(data['veresEnrolled'], 'String');
      }
      if (data.hasOwnProperty('xid')) {
        obj['xid'] = ApiClient.convertToType(data['xid'], 'String');
      }
      if (data.hasOwnProperty('ucafAuthenticationData')) {
        obj['ucafAuthenticationData'] = ApiClient.convertToType(data['ucafAuthenticationData'], 'String');
      }
      if (data.hasOwnProperty('ucafCollectionIndicator')) {
        obj['ucafCollectionIndicator'] = ApiClient.convertToType(data['ucafCollectionIndicator'], 'String');
      }
    }
    return obj;
  }

  /**
   * Cardholder authentication verification value (CAVV).
   * @member {String} cavv
   */
  exports.prototype['cavv'] = undefined;
  /**
   * Algorithm used to generate the CAVV for Visa Secure or the UCAF authentication data for Mastercard Identity Check. 
   * @member {String} cavvAlgorithm
   */
  exports.prototype['cavvAlgorithm'] = undefined;
  /**
   * Raw electronic commerce indicator (ECI). For the description and requirements, see \"Payer Authentication,\" page 180.
   * @member {String} eciRaw
   */
  exports.prototype['eciRaw'] = undefined;
  /**
   * Payer authentication response status. For the description and requirements, see \"Payer Authentication,\" page 180. 
   * @member {String} paresStatus
   */
  exports.prototype['paresStatus'] = undefined;
  /**
   * Verification response enrollment status. For the description and requirements, see \"Payer Authentication,\" page 180.
   * @member {String} veresEnrolled
   */
  exports.prototype['veresEnrolled'] = undefined;
  /**
   * Transaction identifier. For the description and requirements, see \"Payer Authentication,\" page 180.
   * @member {String} xid
   */
  exports.prototype['xid'] = undefined;
  /**
   * Universal cardholder authentication field (UCAF) data.  For the description and requirements, see \"Payer Authentication,\" page 180. 
   * @member {String} ucafAuthenticationData
   */
  exports.prototype['ucafAuthenticationData'] = undefined;
  /**
   * Universal cardholder authentication field (UCAF) collection indicator.  For the description and requirements, see \"Payer Authentication,\" page 180.  **CyberSource through VisaNet**\\ The value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP01 TCR7 - Position: 5 - Field: Mastercard Electronic Commerce Indicators—-UCAF Collection Indicator 
   * @member {String} ucafCollectionIndicator
   */
  exports.prototype['ucafCollectionIndicator'] = undefined;



  return exports;
}));


