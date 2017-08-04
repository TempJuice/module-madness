
var rNumber = 0
function ourRandomNumber(min, max){
    var rNumber = (Math.floor(Math.random() * (1 + max-min) + min));
    return rNumber;
};



console.log(ourRandomNumber(100, 1000000));











module.exports = ourRandomNumber;




//function ('random' + Math.floor(Math.random() * (1 + max-min) + min));