function sumOfArray(num1,num2){
    
    let sum = 0;
    for (const num of arguments){
        sum = sum + num;

    }
 
    return sum;
}

const result   = sumOfArray(2,2,2,4,4,42,24,4);

console.log(result );