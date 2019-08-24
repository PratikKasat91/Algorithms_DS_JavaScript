// Problem Statement
// In this problem, you have to implement the findSum(arr,value) function which will take a number n as input and return two numbers that add up to n.

// Input
// An array and a number n

// Output
// An array with two integers a and b ([a,b]) that add up to n where:

// index of a in the input array < the index of b in the input array

// Sample Input
// arr = [1,21,3,14,5,60,7,6]
// n = 81
// Sample Output
// arr = [21,60]
// For example, in this illustration, we are given 81 as the number n and when we traverse the whole array we find that 21 and 60 are the integers that add up to 81. If our solution fails to find any two numbers, it should return false;

function findSum(arr,value){
    const result = []; // store final result {value, value} => n
    const map = new Map(); // store {value, index}

    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i];
        const complement = value - currentValue;

        if (map.has(complement)) {
            const complementIndex = map.get(complement);
            const complementValue = arr[complementIndex];

            result.push(complementValue, currentValue);
        } else {
            map.set(currentValue, i);
        }
    }

    return result.length > 0 ? result : false;
}