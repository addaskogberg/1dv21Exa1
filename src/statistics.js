/**
 * Module for obtaining descriptive information about a set of data.
 *
 * @author Adda Skogberg
 * @version 1.1.0
 */

'use strict'

/**
 * Returns the descriptive information (maximum, mean, median, minimum,
 * mode, range and standard deviation) from a set of numbers.
 *
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The argument must be an array.
 * @throws {Error} The argument can not be an empty array.
 * @throws {TypeError} The argument must be an array containing just numbers.
 * @returns {{maximum: number, mean: number, median: number, minimum: number, mode: number[], range: number, standardDeviation: number}}
 */
function descriptiveStatistics (numbers) {
    if(!Array.isArray(numbers)){
        throw new TypeError ("numbers doesn't refer to an array")
    }

    if(numbers.length === 0){   
        throw new Error ("array is empty")
    }

    let isNumber = true

    for(let i = 0; i < numbers.length; i++){
        if(isNaN(numbers[i])){
            isNumber = false
            break
        }
    }

    if(!isNumber){
        throw new Error ("array element is Not A Number") 
    }

    let result=[]
    result[0] = "maximum: " + maximum(numbers)
    result[1] = "mean: : " + mean(numbers)
    result[2] = "median: " + median(numbers)
    result[3] = "minimum: " + minimum(numbers)
    result[4] = "mode: " + mode(numbers)
    result[5] = "range: " + range(numbers)
    result[6] = "standardDeviation: " + standardDeviation(numbers)
    return result

}

/**
 * Identifies the largest number in the array by looping through every element of the array and comparing, starting att index 0.
 *
 * @param {number[]} numbers // input an array of numbers
 * @returns {{maximum: number}} // returns type number
 */
function maximum (numbers){
    let largest = numbers[0]

    for (var i = 0; i < numbers.length; i++) { //loops through the array
        if (largest < numbers[i] ) { //compares the number in the index with largest 
            largest = numbers[i]    // if largest is smaler then numbers, numbers equals largest
        }
    }
    return largest   
}

/**
 * Calculates the average of the numbers in an array.
 * @param {number[]} numbers // input an array of numbers
 * @returns {{mean: number}} // returns type number
 */

function mean (numbers){
    let sum = 0;
    for(var i = 0; i < numbers.length; i++) {// loops through the array
        sum += numbers[i]; // adds up all the numbers in the array
    }
    let average = sum / numbers.length; // divides the sum of the array with the number of indexes
    return average
}

/**
 * find the middle number in an array
 * @param {number[]} numbers // input an array of numbers
 * @returns {{median: number}} // returns type number
 */
function median (numbers){
        let median = 0,
            numbersLength = numbers.length; //finds the length of the array
        numbers.sort();                     //sorting the number
        if (numbersLength % 2 === 0) { // is the number even
            median = (numbers[numbersLength / 2 - 1] + numbers[numbersLength / 2]) / 2; //finding the middle and if the number of arrays is even add the 2 middle numbers and divide by 2. -1 for array positioning 
        } else { 
            median = numbers[(numbersLength - 1) / 2]; // finding the element in the middle by dividing the array. -1 for posisioning in the array
        }
        return median;
      }
    
/**
 * finding the smallest number in an array
 * @param {number[]} numbers // input an array of numbers
 * @returns {{minimum: number}} // returns type number
 */
function minimum (numbers){
    let smallest = numbers[0]
    
    for (var i = 0; i < numbers.length; i++) {
        if (smallest > numbers[i] ) {  //compares the number in the index with smallest
            smallest = numbers[i]      //  smallest equals numbers
        }
    }
    
   return smallest

}

/**
 * find the number that is repeated more often than any other
 * @param {number[]} numbers // input an array of numbers
 * @returns {{mode: number}} // returns type number 
 */
    function mode(numbers) {
        let mostFrequentNr 
        let count = []
        let number
        let maxCount = 0
     
        for (var i = 0; i < numbers.length; i ++) {
            number = numbers[i];
           if (isNaN(count[number])){ // initiaties the count 1 at index 0
                count[number] = 1
           }
           else{
               count[number]++
           }

            if (count[number] > maxCount) {
                maxCount = count[number]
               mostFrequentNr = number
            }
        }
        return mostFrequentNr 
}

/**
 * 
 * @param {number[]} numbers // input an array of numbers
 * @returns {{range: number}} // returns type number 
 */
function range (numbers){
    let min = minimum(numbers)
    let max = maximum(numbers)
    
    return  max - min 
}

/**
 * 
 * @param {number[]} numbers // input an array of numbers
 * @returns {{standardDeviation: number}} // returns type number 
 */
function standardDeviation (numbers){

    let average = mean(numbers)
    let numerator = 0
    for(var i = 0; i < numbers.length; i++) { //loopar igenom arrayen
        numerator += (numbers[i] - average) * (numbers[i] - average) // beräknar varje index minus medel i kvadrat
    }
    let NumDivDenom = numerator / (numbers.length-1) // delar nämnare med medel minus ett

    return  Math.sqrt(NumDivDenom) // roten ur....
}    
// Exports

exports.descriptiveStatistics = descriptiveStatistics
exports.maximum = maximum
exports.mean = mean
exports.median = median
exports.minimum = minimum
exports.mode = mode
exports.range = range
exports.standardDeviation = standardDeviation
