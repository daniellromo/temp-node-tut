// npm - global command, comes with node
// npm -- version

// local dependency - only use package in this particular project
// npm i <packageName>

// global dependancy - use package in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)'
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// We need a package.json to provide information about our project, inside the json a very important property is the
// dependencies property because it will store all dependencies which our project and packages are using, some packages
// Will be using more dependancies which will be automatically installed
// lodash is just a utility library

//When you install a package, the package details will be stored as a dependencies property in the json file

// If you click on the node_modules folder, you will be able to navigate all stored dependencies. If you don't have 
// This folder already, npm creates it and stores any dependencies associated with the package you're installing

// note that the lodash package only has 1 dependency hence why 1 folder is created in the nodes_modules
// but if you install a larger package with more dependencies i.e. bootstrap, you get 
// popper.js, bootstrap and jquery (3) dependencies being stored in node_modules
// in other words, some packages will use more dependencies which will be automatically installed too

// In order to use the loadash module, first you'll need to set up a loadash variable
const _ = require('lodash') // common convention for naming packages is to use a dash

const items = [1,[2,[3,[4]]]] // creating an array of arrays
const newItems = _.flattenDeep(items) // loadash's flattenDeep method will return this as a flat array
console.log(newItems);