const { handleFormSubmission } = require('../src/client/js/formHandler.js')

describe("Testing user submission functionality", () => {
    test("test handleSubmit function", () => {
        expect(handleFormSubmission).toBeDefined()
    })
});
