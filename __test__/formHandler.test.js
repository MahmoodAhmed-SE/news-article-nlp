const { handleSubmit } = require('../src/client/js/formHandler.js');

describe("Testing user submission functionality", () => {
    document = {
        getElementById: null
    }
    document.getElementById = jest.fn((_) => {
        return {
            addEventListener: jest.fn(() => {})
        }
    })
    test("test handleSubmit function", () => {
        expect(handleSubmit).toBeDefined();
    })
});
