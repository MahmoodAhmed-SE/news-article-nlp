const { checkForName } = require('../src/client/js/nameChecker.js')

describe("Checking whether naming checking functionality works as expected", () => {
    global.alert = jest.fn();
    test("test whether Picard exists in the names list", () => {
        expect(checkForName('Picard')).toBe(true)
    })
})