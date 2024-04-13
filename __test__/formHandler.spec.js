const { handleSubmit } = require('../src/client/js/formHandler.js');

describe("Testing user submission functionality", () => {
    test("test handleSubmit function", () => {
        expect(handleSubmit).toBeDefined();
    })
});
