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
function median (numbers){
        var median = 0,
            numbersLength = numbers.length; //kollar längden på numbers
        numbers.sort();
        if (numbersLength % 2 === 0) { // är talet udda eller jämt
            median = (numbers[numbersLength / 2 - 1] + numbers[numbersLength / 2]) / 2; //-1 för array positionering mot numbers.length
        } else { 
            median = numbers[(numbersLength - 1) / 2];
        }
        return median;
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
 * The mode is the number that is repeated more often than any other
 * 
 */
function mode (numbers){
    var mode = numbers[0]


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
function standardDeviation (numbers){

    let average = mean(numbers)

    let numerator = 0;
    for(var i = 0; i < numbers.length; i++) {
        numerator += (numbers[i] - average) * (numbers[i] - average)
    }
    let standarDev = Math.sqrt(numerator / (numbers.length-1))

    console.log(standardDev)
    
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
