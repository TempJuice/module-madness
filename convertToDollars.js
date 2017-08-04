
//var money = 0;
function convertToMoney (n){
    var money = n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    return money;
};

//console.log(convertToMoney(1233));



module.exports = convertToMoney;