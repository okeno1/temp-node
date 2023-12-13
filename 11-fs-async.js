const {readFile, writeFile} = require('fs');

console.log('start');


readFile('./Content/first.txt','utf8',(err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    //console.log(result);
    const first = result;

    readFile('./Content/second.txt','utf8',(err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './Content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result)=>{
                if(err){
                    console.log(err);
                }
                //console.log(result);
                console.log('done with this task');
            }
        )
    })
})

console.log('Starting the next task');