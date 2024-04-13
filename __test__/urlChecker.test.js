const { checkForUrl } = require('../src/client/js/urlChecker.js')


describe("Testing whether the url checking functionality works", () => {
    test("Valid url", () => {
        expect(checkForUrl('https://www.nytimes.com/spotlight/artificial-intelligence'))
        .toBe(true)
    })
})