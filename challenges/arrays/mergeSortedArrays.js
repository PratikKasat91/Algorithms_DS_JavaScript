// Merge two sorted arrays:

// Problem Statement
// Implement a function which merges two sorted arrays into another sorted array. Name it mergeArrays(arr1, arr2).

// Input:
// Two sorted arrays.

// Output:
// A merged sorted array consisting of all elements of both input arrays.

// Sample Input
// arr1 = [1,3,4,5] arr2 = [2,6,7,8]

// Sample Output
// arr = [1,2,3,4,5,6,7,8]


/**
 * @param {Array} arr1 
 * @param {Array} arr2
 * @returns {Array} sorted array 
 */
function mergeArrays(arr1, arr2) {
    let i = 0;
    let j = 0;

    const result = [];

    //Traverse both arrays and insert smaller value from arr1 or arr2
    //into result array and then increment that array index.
    //If an array is completely traversed, while other one is left then just
    //copy all the remaining elements into result array
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}