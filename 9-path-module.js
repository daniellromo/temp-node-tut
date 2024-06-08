const path = require('path') //This is the built in file path module


console.log(path.sep) //Method for showing the seperator your platform or system uses in the file path

const filePath = path.join('/content','subfolder','test.txt') /* Join method for joining a sequence of path 
segments using the platform specific seperator as the delimiter AND returns a normalised resulting path */

console.log(filePath)

const base = path.basename(filePath); //Basename method returns the last portion of the filepath
console.log(base)

/* The resolve method accepts a sequence of path segements and 
literally resolves the absolute path of a file from the left-most paramater to the 
(right-most parameter), even if there are path segments missing from the path seqeuence */

const absolute = path.resolve(__dirname,'content','subfolder','test.txt') //working directory used as left-most parameter
console.log(absolute)

//This is a useful method because the application may run in different environemnts and so the path to a resource
//will be different on my local machine than Heroku (used by devs to get apps to market)