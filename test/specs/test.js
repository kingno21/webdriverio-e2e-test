var assert = require('assert');

describe('google', function() {
    it('should go to google homepage', function () {
        browser.url('http://www.google.com');
        var title = browser.getTitle();
        assert.equal(title, 'Google');
    });
});
