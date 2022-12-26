/*
Write a function called make_avg() which will take an three integers 10, 20 & 30 and return the
average of those values.
*/

function make_avg(num1, num2, num3){
    let sum = num1 + num2 + num3;
    let avg = sum / 3
    return avg;
}

let average = make_avg(10, 20, 30);
console.log(average);