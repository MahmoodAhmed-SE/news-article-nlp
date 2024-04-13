# News Article NLP project


## About project & Reasoning

This project is the final assignment within the Front End Web Developer Fundamentals Nanodegree program, generously sponsored by the Ministry of Transportation, Communications, and Information Technology (MTCIT). This assignment is an integral part of the program's curriculum. It aims to evaluate news articles using Natural Language Processing techniques. 

## Project Overview

The project is structured as follows:

- **Architecture**: The project follows a specific architecture similar to the one taught in the course. It includes webpack configurations for development and production, and it has scripts for building and running the application.
- **Content**: The project contains HTML, JavaScript, and SCSS files organized in the appropriate directories. It includes a single HTML file with valid semantic markup, multiple JavaScript files for different functionalities, and SCSS files for styling.
- **Functionality**: The application interacts with an external API to analyze news articles. It makes successful API calls on form submission and displays relevant information from the API response.
- **Offline Functionality**: The project implements service workers using the Workbox plugin to enable offline functionality.
- **Testing**: Jest is used for testing, and there are unit tests for each JavaScript file. The tests ensure the correctness of the application's functionalities.
- **Interactions**: The landing page includes a form for user input, which validates the input and alerts the user if the input is invalid. 

## How to Run the App

To run the application locally, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. create a file named '.env', and inside it, include your MeaningCloud API key through typing: apiKey = "your-api-key" and save the file.
4. Build the project using `npm run build`.
5. Start the development server using `npm run start`.

## Dependencies

The project uses the following dependencies:

### Production Dependencies:
- [cors](https://www.npmjs.com/package/cors): ^2.8.5
- [css-loader](https://www.npmjs.com/package/css-loader): ^6.10.0
- [dotenv](https://www.npmjs.com/package/dotenv): ^16.4.5
- [express](https://www.npmjs.com/package/express): ^4.17.1
- [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin): ^5.6.0
- [node-fetch](https://www.npmjs.com/package/node-fetch): ^3.3.2
- [style-loader](https://www.npmjs.com/package/style-loader): ^3.3.4
- [webpack-cli](https://www.npmjs.com/package/webpack-cli): ^5.1.4

### Development Dependencies:
- [@babel/core](https://www.npmjs.com/package/@babel/core): ^7.5.4
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env): ^7.5.4
- [babel-loader](https://www.npmjs.com/package/babel-loader): ^8.0.6
- [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin): ^4.0.0
- [jest](https://www.npmjs.com/package/jest): ^29.7.0
- [jest-environment-jsdom](https://www.npmjs.com/package/jest-environment-jsdom): ^29.7.0
- [sass](https://www.npmjs.com/package/sass): ^1.72.0
- [sass-loader](https://www.npmjs.com/package/sass-loader): ^14.1.1
- [webpack](https://www.npmjs.com/package/webpack): ^5.90.3
- [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server): ^5.0.2
- [workbox-webpack-plugin](https://www.npmjs.com/package/workbox-webpack-plugin): ^7.0.0