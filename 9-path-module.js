//CommonJS, every file is a module (by default)
//Modules - Encapsulated Code (Only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-Addin')
const os = require('os');

//console.log(names);



//sayHi('Susan');
//method 1
//sayHi(john)
//sayHi(peter)
/// method 2 ///
//sayHi(names.john);
//sayHi(names.peter);

//console.log(data);
//console.log(data.items[0]);
//console.log(person);
/*
//info on current user
const user = os.userInfo();
console.log(user);

//method returns system uptime in seconds
console.log(`system Uptime ${os.uptime()} seconds`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freememory: os.freemem(),
}

console.log(currentOS);
*/
const path = require('path')

console.log(path.sep);

const filePath = path.join('/Content','subfolder','test.txt');
console.log(filePath);


const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname,'Content','subfolder','test.txt');
console.log(absolute)


 