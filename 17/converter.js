// function Converter(baseCurrencyUs) {
//     this.baseCurrencyUs = baseCurrencyUs;
// };

// Converter.prototype.roundTwoDecimal = function(amount){
//     return Math.round(amount * 100) / 100;
// };

// Converter.prototype.convertToUa =function(currency){
//     return this.roundTwoDecimal(currency * this.baseCurrencyUs);
// };

// Converter.prototype.convertToUs =function(currency){
//     return this.roundTwoDecimal(currency / this.baseCurrencyUs);
// };

// module.exports = Converter;
//----------------------------------------------------

// Переписан на es6 синтаксис
class Converter{
    constructor(baseCurrencyUs){
        this.baseCurrencyUs = baseCurrencyUs;
    };
    //helper приводит число к нормальному виду
    roundTwoDecimal(amount){
        return Math.round(amount * 100) / 100; 
    };

    convertToUa(currency){
        return this.roundTwoDecimal(currency * this.baseCurrencyUs);
    };

    convertToUs(currency){
        return this.roundTwoDecimal(currency / this.baseCurrencyUs);
    };
};
module.exports = Converter;

