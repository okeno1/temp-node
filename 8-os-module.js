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