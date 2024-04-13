import {checkForName} from './nameChecker'
import { checkForUrl } from './urlChecker';

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;
    
    // Check if the URL is valid
    if (checkForUrl(formText)) {
        // If the URL is valid, send it to the server
        postData('/article', { url: formText })
        .then(response => {
            console.log(response)
            // Handle the response from the server and update dom
            document.getElementById('results').innerHTML = response.score_tag;
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors
        });
    } 
    else {
        alert('Invalid URL');
        console.log('Invalid URL');
        // Handle invalid URL 
    }
}

// Function to send article url to the server
async function postData(url = '', data = {}) {
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

export { handleSubmit };

