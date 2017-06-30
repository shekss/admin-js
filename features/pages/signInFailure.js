// Page class for SignIn Failure page

var SignInFailurePage = function () {


    this.heading = element(by.css('.heading-xlarge'));
    this.instructions = element(by.css('p.lede'));
    this.phase_banner = element(by.css('phase-banner'));

};

module.exports = new SignInFailurePage();
