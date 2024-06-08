//module for interacting with file system. This functionality can be leveraged in Node.js but not javascript on browser

//The file module can be used in two ways (2-flavours)
//1. Asynchronously, which is non-blocking
//2. Synchronously,which is blocking

//The course will later delve into the differences between them and why you'd choose one over the other.

const {readFile,writeFile} = require('fs'); //specfically importing readFile and WriteFile method from 'fs' module

// For the synchronous method, you need to provide a callback. The callback runs when the operation is executed
console.log('start')
readFile('./content/first.txt','utf8', (err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{ //provide callback
        if(err){
            console.log(err)
            return
        }
const second = result;
writeFile(
    './content/result-async.txt',
    `Here is the result: ${first}, ${second}`,
    (err, result) => {
        if (err){
            console.log(err);
            return;
        }
        console.log('done with this task')
        })
    })
})
console.log('starting next task')

// The benefit of an asynchronised apprach is that the programme can work in a different order. 
// You can prioritise the execution of simple tasks firsts while offloading process heavy operations that work
// in the background to avoid slowing down the simple tasks. i.e. above, 'start' and the 'starting next task'
// can be initiated instantly while the reading and writing task is offloaded and executes the result
// at the end becuase it takes more time.

// In the synchronised approach, everything takes place line by line, so only when we're done with a task can the
// the next one start. With asynchronised, we can start a task, offload the heavy task and start the next right away