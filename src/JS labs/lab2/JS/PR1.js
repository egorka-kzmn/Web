function sumOfDigits(number) {
    
    return String(number)
        .split('')
        .reduce((sum, digit) => sum + Number(digit), 0);
}

result = sumOfDigits(245678);
console.log(result);
result = sumOfDigits(97561); 
console.log(result);
result = sumOfDigits(543); 
console.log(result);