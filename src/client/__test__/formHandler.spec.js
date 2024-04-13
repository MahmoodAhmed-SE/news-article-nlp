const { handleSubmit, postData } = require('../js/formHandler')

describe("Testing user submition functionality", () => {
    test("test handleSubmit function", () => {
        expect(handleSubmit()).toBeDefined() 
    })

    test("test posting url data to server", async () => {
        expect(await postData('/article', { url: 'https://www.nytimes.com/spotlight/artificial-intelligence' }))
            .toBeDefined()
    })
})