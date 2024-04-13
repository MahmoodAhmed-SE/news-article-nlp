const { checkForUrl } = require('../js/urlChecker')


describe("Testing whether the url checking functionality works", () => {
    test(checkForUrl('https://www.nytimes.com/spotlight/artificial-intelligence'))
        .toBe(true)
})