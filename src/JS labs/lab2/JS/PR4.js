function Calculator(Number1, String1, Number2) {
    let result;

    switch (String1){
        case '+':
            result = Number1 + Number2;
            break;
        case '-':
            result = Number1 - Number2;
            break;
        case '*':
            result = Number1 * Number2;
            break;
        case '/':
            if (Number2 !==0){
                result = Number1 / Number2;
            }else{
                return "Ошибка";
            }            
            break;
        default:
            return "Ошибка";    
    }
    return result.toFixed(2);
}


console.log(Calculator(1.57597, "+", 1));
console.log(Calculator(1, "-", 1)); 
console.log(Calculator(2, "*", 2)); 
console.log(Calculator(2, "/", 2)); 
console.log(Calculator(1, "f", 1)); 
console.log(Calculator(1, "/", 0)); 
