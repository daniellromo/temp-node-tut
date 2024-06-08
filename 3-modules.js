// CommonJS, every file is module (by default)
/* Modules - Encapsulated Code (only share minimum), 
so it's up to the dev to set values to the exports object if they are needed as global values */

const names = require('./4-names') //using relative path, setting names to '4-names' module
const sayHi = require('./5- utils') 
//console.log(names) //console logs all the module exports
const data = require('./6-alternarive-flavor')
console.log(data)
require('./7-mind-grenade')
// sayHi("Daniel")
// sayHi(names.john)
// sayHi(names.peter)