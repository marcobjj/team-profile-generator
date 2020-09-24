const app = require('./lib/app')
const template = require('./src/Template.js');
const {generatePage, generateCard} = template;

new app(generatePage,generateCard).init();