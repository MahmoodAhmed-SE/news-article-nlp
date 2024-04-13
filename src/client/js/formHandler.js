const { URLValidity } = require('./URLValidity');


// Form submission event listener
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('urlForm');
    form.addEventListener('submit', handleFormSubmission)
});

/*
    res ex:
        agreement: "AGREEMENT"
        confidence: "100"
        irony: "NONIRONIC"
        model: "general_en"
        score_tag: "NONE"
        sentence_list: (18) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        sentimented_concept_list: []
        sentimented_entity_list: (14) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        status: {code: '0', msg: 'OK', credits: '1', remaining_credits: '51'}
        subjectivity: "OBJECTIVE"


    needed: polarity: (positive/'negative')
            subjectivity: ('subjective', factual)
            text: a text snippet from the article
*/

function handleFormSubmission(event) {
    event.preventDefault();

    // Get the URL from the input field
    const inputURL = document.getElementById('url-entry').value;
    
    /* 
        Check whether input URL is valid, and if it is, send it to server to get information,
        otherwise, alert user for an invalid url input
    */
    if (URLValidity(inputURL)) {
        postArticleURL('/article', { url: inputURL })
        .then(articleData => {
            console.log(articleData)
            // Handling the response from the server and updating the DOM
            updateDOMWithResponse(articleData)
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } 
    else {
        alert('Invalid URL! Please enter a valid URL.');
    }
}
const updateDOMWithResponse = (articleData) => {
    document.getElementById('results').innerHTML = `
    <h2>Article Information</h2>: 
    <ul>
    <li>Subjectivity: ${articleData.subjectivity}</li>
    <li>Text: ${articleData.sentence_list.text}</li>
    <li>Irony: ${articleData.irony}</li>
    </ul>
    `;
}
// Function to send article url to the server
const postArticleURL = async (url = '', data = {}) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return response.json();
    } catch (error) {
        throw error;
    }
}

module.exports = { handleFormSubmission };