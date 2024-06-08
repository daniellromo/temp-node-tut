//module for interacting with file system. This functionality can be leveraged in Node.js but not javascript on browser

//The file module can be used in two ways (2-flavours)
//1. Asynchronously, which is non-blocking
//2. Synchronously,which is blocking

//The course will later delve into the differences between them and why you'd choose one over the other.

const {readFileSync,writeFileSync} = require('fs');
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// If the file already exists, the contents of the file will be overwritten with the second argument. 
// If the file doesn't exist, Node.js will create a file with the designated name
writeFileSync('./content/result-sync.txt',
`Here is the result: ${first}, ${second}`,
{flag: 'a'} // this is to append rather than overwrite
)

console.log('done with this task')
console.log('starting the next one')
