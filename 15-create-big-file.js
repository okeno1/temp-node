const {writeFileSync} = require('fs')

for(let i=0;i<100000;i++){
    writeFileSync('./Content/bigFile.txt',`Hello World ${i}\n`,{flag:'a'})
}