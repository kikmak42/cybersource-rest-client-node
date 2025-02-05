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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Riskv1authenticationsConsumerAuthenticationInformation', function() {
    it('should create an instance of Riskv1authenticationsConsumerAuthenticationInformation', function() {
      // uncomment below and update the code to test Riskv1authenticationsConsumerAuthenticationInformation
      //var instane = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
      //expect(instance).to.be.a(CyberSource.Riskv1authenticationsConsumerAuthenticationInformation);
    });

    it('should have the property alternateAuthenticationData (base name: "alternateAuthenticationData")', function() {
      // uncomment below and update the code to test the property alternateAuthenticationData
      //var instane = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property alternateAuthenticationDate (base name: "alternateAuthenticationDate")', function() {
      // uncomment below and update the code to test the property alternateAuthenticationDate
      //var instane = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property alternateAuthenticationMethod (base name: "alternateAuthenticationMethod")', function() {
      // uncomment below and update the code to test the property alternateAuthenticationMethod
      //var instane = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property authenticationTransactionId (base name: "authenticationTransactionId")', function() {
      // uncomment below and update the code to test the property authenticationTransactionId
      //var instane = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property challengeCode (base name: "challengeCode")', function() {
      // uncomment below and update the code to test the property challengeCode
      //var instane = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property customerCardAlias (base name: "customerCardAlias")', function() {
      // uncomment below and update the code to test the property customerCardAlias
      //var instane = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property defaultCard (base name: "defaultCard")', function() {
      // uncomment below and update the code to test the property defaultCard
      //var instane = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property installmentTotalCount (base name: "installmentTotalCount")', function() {
      // uncomment below and update the code to test the property installmentTotalCount
      //var instane = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property marketingOptIn (base name: "marketingOptIn")', function() {
      // uncomment below and update the code to test the property marketingOptIn
      //var instane = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property marketingSource (base name: "marketingSource")', function() {
      // uncomment below and update the code to test the property marketingSource
      //var instane = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property mcc (base name: "mcc")', function() {
      // uncomment below and update the code to test the property mcc
      //var instane = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property messageCategory (base name: "messageCategory")', function() {
      // uncomment below and update the code to test the property messageCategory
      //var instane = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property npaCode (base name: "npaCode")', function() {
      // uncomment below and update the code to test the property npaCode
      //var instane = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property overridePaymentMethod (base name: "overridePaymentMethod")', function() {
      // uncomment below and update the code to test the property overridePaymentMethod
      //var instane = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property productCode (base name: "productCode")', function() {
      // uncomment below and update the code to test the property productCode
      //var instane = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property requestorId (base name: "requestorId")', function() {
      // uncomment below and update the code to test the property requestorId
      //var instane = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property requestorName (base name: "requestorName")', function() {
      // uncomment below and update the code to test the property requestorName
      //var instane = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property referenceId (base name: "referenceId")', function() {
      // uncomment below and update the code to test the property referenceId
      //var instane = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

    it('should have the property transactionMode (base name: "transactionMode")', function() {
      // uncomment below and update the code to test the property transactionMode
      //var instane = new CyberSource.Riskv1authenticationsConsumerAuthenticationInformation();
      //expect(instance).to.be();
    });

  });

}));
