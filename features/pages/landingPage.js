// Page class for Landing page

var landingPage = function () {


    this.home = element(by.css('#content > .page-header > .breadcrumbs a'));
    this.breadcrumb = element(by.css('#content > .page-header > .breadcrumbs'));

};

module.exports = new landingPage();
