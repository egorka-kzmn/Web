function arrayChange(arr){
    let sum = 0;
    let sumNew = 0;
    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        sum += num;
        if(num % 2 === 0){
            num += i;
        }
        else{
            num -= i;
        }
        sumNew += num;
        arr[i] = num;
    }
    console.log(arr);
    console.log(sum);
    console.log(sumNew);
}

arrayChange([5, 15, 23, 56, 35]);
arrayChange([-5, 11, 3, 0, 2] );