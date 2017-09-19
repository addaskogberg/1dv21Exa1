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

// TODO: Write your code here.


/**
 * 
 * 
 */
function maximum (numbers){
    var largest = numbers[0]
    
    for (var i = 0; i < numbers.length; i++) {
        if (largest < numbers[i] ) {
            largest = numbers[i]
        }
    }
    
   return largest
   

}

/**
 * 
 * 
 */

function mean (numbers){
    var sum = 0;
    for(var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    var mean = sum / numbers.length;
    return mean
}

/**
 * 
 * 
 */
function median (){

}

/**
 * 
 * 
 */
function minimum (numbers){
    var smallest = numbers[0]
    
    for (var i = 0; i < numbers.length; i++) {
        if (smallest > numbers[i] ) {
            smallest = numbers[i]
        }
    }
    
   return smallest

}

/**
 * 
 * 
 */
function mode (){

}

/**
 * 
 * 
 */
function range (){

}

/**
 * 
 * 
 */
function standardDeviation (){

}

// Exports

exports.descriptiveStatistics = descriptiveStatistics
exports.maximum = undefined
exports.mean = undefined
exports.median = undefined
exports.minimum = undefined
exports.mode = undefined
exports.range = undefined
exports.standardDeviation = undefined
