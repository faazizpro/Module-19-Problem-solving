/*
Write a function called make_avg() which will take an array of integers and
the size of that array and return the average of those values.
*/

function make_avg(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
        return sum /arr.length;
}

let result = make_avg([1,2,3,4,5]);
console.log(result);