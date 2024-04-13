const { checkForName } = require('./nameChecker')
const { checkForUrl } = require('./urlChecker');


// Form submission event listener
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('urlForm');
    form.addEventListener('submit', handleFormSubmission)
});


function handleFormSubmission(event) {
    event.preventDefault();

    // Get the URL from the input field
    const inputURL = document.getElementById('url-entry').value;
    
    /* 
        Check whether input URL is valid, and if it is, send it to server to get information,
        otherwise, 
    */
    if (checkForUrl(inputURL)) {
        postArticleURL('/article', { url: inputURL })
        .then(response => {
            console.log(response)
            // Handle the response from the server and update dom
            document.getElementById('results').innerHTML = response.score_tag;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } 
    else {
        alert('Invalid URL');
    }
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