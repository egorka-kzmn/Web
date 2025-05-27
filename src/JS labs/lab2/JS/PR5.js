function binaryToDecimal(binaryString){
    if(!/^[01]{8}$/.test(binaryString)){
        return "Ошибка"
    }
    return parseInt(binaryString, 2);
}

console.log(binaryToDecimal('00000011'));
console.log(binaryToDecimal('00001100'));
console.log(binaryToDecimal('00110000'));
console.log(binaryToDecimal('11000000'));
console.log(binaryToDecimal('00001111'));
console.log(binaryToDecimal('11110000'));