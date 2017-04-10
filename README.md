### Koa Recipe Service

Application is a minimal rest api written in koa.

### Implimented features

- Filter Recipes by name, cooking time and ingredients
- Retrieve User

### Installation  requirements

- Node v7.6.0
- MongoDB

### Installation Instructions
1. Clone this repository to your local machine and run ```npm install``` from the project root
2. Run the below additional npm scripts in order
 - ```npm run build``` to transpile ES6 code to ES5 into the a dist folder using babel
 - ```npm start``` to start the server
   - Optional: you can skip the ```npm run build``` and ```npm start``` commands and just run ```npm run start-dev``` to run the server directly on babel-node
 - ```npm run prefill``` will preload some sample data into mongodb to work with
 - ```npm test``` will run both the unit and api tests
