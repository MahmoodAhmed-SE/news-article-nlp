const { URLValidity } = require('../src/client/js/URLValidity.js')


describe("Testing whether the url checking functionality works", () => {
    test("Valid url", () => {
        expect(URLValidity('https://www.nytimes.com/spotlight/artificial-intelligence'))
        .toBe(true)
    })
})