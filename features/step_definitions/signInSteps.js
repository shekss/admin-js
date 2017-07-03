// Step definitions

var signin = require('../page_objects/signInPage');
var landingPage = require('../page_objects/landingPage');
var signinfailure = require('../page_objects/signInFailure');
var {defineSupportCode} = require('cucumber');
var Mongo = require('../page_objects/mongoDbHelper');

defineSupportCode(function ({Given, When, Then}) {

    Given(/^I am on the sign in page$/, function (callback) {
        browser.get(config.appUrl);
        expect(signin.usernameField).to.eventually.be.present
            .then(callback);
    });

    Then(/^I should see a page heading$/, function (callback) {
        expect(signin.heading).to.eventually.have.text('Check Development Service')
            .then(callback);
    });

    Then(/^I should see instructions$/, function (callback) {
        expect(signin.instructions).to.eventually.have.text('Sign-in to access the Check Development Service')
            .then(callback);
    });

    Given(/^I have entered valid credentials$/, function (callback) {
        browser.get(config.appUrl);
        signin.login('teacher1', 'password')
        callback();
    });

    When(/^I sign in$/, function (callback) {
        signin.signIn.click
        callback();
    });

    Then(/^I should be taken to the school landing page$/, function (callback) {
        expect(landingPage.breadcrumb).to.eventually.have.text('School Home')
            .then(callback)
    });

    Given(/^I have entered invalid credentials$/, function (callback) {
        browser.get(config.appUrl);
        signin.login('teacher1', 'wrong')
        callback();
    });

    Then(/^I should be taken to the failed login page$/, function (callback) {
        expect(signinfailure.heading).to.eventually.have.text('Unable to confirm details')
        expect(signinfailure.instructions).to.eventually.have.text('The details entered do not match our records.')
            .then(callback);
    });

});
