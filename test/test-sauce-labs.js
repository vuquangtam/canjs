/* jshint esversion: 6 */
'use strict';

var testSauceLabs = require('test-saucelabs');

// https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
var platforms = [{
	browserName: 'googlechrome',
	platform: 'Windows 10',
	version: 'latest'
}, {
	browserName: 'internet explorer',
	platform: 'Windows 10',
	version: '11.0'
}, {
	browserName: 'safari',
	platform: 'OS X 10.12',
	version: 'latest'
}, {
	browserName: 'MicrosoftEdge',
	platform: 'Windows 10'
}, {
	browserName: 'firefox',
	platform: 'Windows 10',
	version: 'latest'
}];

var url = 'http://canjs.test:3000/test/index.html?hidepassed';

testSauceLabs({
	urls: [{ name: "canjs", url : url }],
	platforms: platforms,
	zeroAssertionsPass: false
});
