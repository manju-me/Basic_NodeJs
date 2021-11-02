const moment = require("moment");
var myDate = new Date();

console.log(myDate);
var utc = myDate.toUTCString();

console.log(utc);
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(moment().format("DD/MM/yyyy HH:mm:ss"));
console.log(Date.parse(myDate, "MM/dd/yyyy"));
