const num1 = 5;
const num2 = 10;

function addValues() {
    console.log(`the sum is: ${num1 + num2}`)
}

addValues()

/* in 3-modules.js this module 'mind-grenades'is imported but there is no modules.export in this file. 
This happens because the addValues() function is being executed in this module so it is autmatically 
excuted when imported in 3-modules.js *\
