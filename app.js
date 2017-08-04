console.log('Module Madness');

var randomNumber = require('./randomNumber');
var convertToDollars = require('./convertToDollars');
//var moduleThree = require('./moduleThree');

randomNumber();
console.log(convertToDollars(14532.09877));
