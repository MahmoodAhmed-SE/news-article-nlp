const { checkForName } = require('../js/checkForName')


describe("Checking whether naming checking functionality works as expected", () => {
    test("test whether Picard exists in the names list", checkForName('Picard'))
        .toBe(true)
})