/*
Write a function called odd_even() which takes an integer value and tells whether this
value is even or odd.
*/

// 1 way:
function odd_even(num){
    if(num % 2 === 0){
        console.log(`${num} is even number`);
    }
    else{
        console.log(`${num} is odd number`);
    }
}


odd_even(10);
odd_even(11);
