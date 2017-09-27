/**
 * Module for obtaining descriptive information about a set of data.
 * @module src/statistics
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
  if (!Array.isArray(numbers)) {
    throw new TypeError('The passed argument is not an array.')
  }
    // exception thrown if array is empty ||typeof numbers[i] === 'string'
  if (numbers.length === 0) {
    throw new Error('The passed array contains no elements.')
  }
  let isNumber = true
  for (let i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i]) || typeof numbers[i] === 'string') {
      isNumber = false
      break
    }
  }
  if (!isNumber) {
    throw new TypeError('The passed array contains not just numbers.')
  }
    // the exports collected in an array
  return {maximum: maximum(numbers), mean: mean(numbers), median: median(numbers), minimum: minimum(numbers), mode: mode(numbers), range: range(numbers), standardDeviation: standardDeviation(numbers)}
}

/**
 * Identifies the largest number in the array by looping through every element of the array and comparing, starting att index 0.
 *
 * @param {number[]} numbers // input an array of numbers
 * @returns {{maximum: number}} // returns type number
 */
function maximum (numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('The passed argument is not an array.')
  }
    // exception thrown if array is empty ||typeof numbers[i] === 'string'
  if (numbers.length === 0) {
    throw new Error('The passed array contains no elements.')
  }
  let isNumber = true
  for (let i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i]) || typeof numbers[i] === 'string') {
      isNumber = false
      break
    }
  }
  if (!isNumber) {
    throw new TypeError('The passed array contains not just numbers.')
  }
  let largest = numbers[0]

  for (let i = 0; i < numbers.length; i++) { // loops through the array
    if (largest < numbers[i]) { // compares the number in the index with largest
      largest = numbers[i]     // if largest is smaller then numbers[i], numbers[i] equals largest
    }
  }
  return largest
}

/**
 * Calculates the average of the numbers in an array.
 * @param {number[]} numbers // input an array of numbers
 * @returns {{mean: number}} // returns type number
 */
function mean (numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('The passed argument is not an array.')
  }
    // exception thrown if array is empty ||typeof numbers[i] === 'string'
  if (numbers.length === 0) {
    throw new Error('The passed array contains no elements.')
  }
  let isNumber = true
  for (let i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i]) || typeof numbers[i] === 'string') {
      isNumber = false
      break
    }
  }
  if (!isNumber) {
    throw new TypeError('The passed array contains not just numbers.')
  }
  let sum = 0
  for (let i = 0; i < numbers.length; i++) { // loops through the array
    sum += numbers[i] // adds up all the numbers in the array
  }
  let average = sum / numbers.length // divides the sum of the array with the number of indexes
  return average
}

/**
 * find the middle number in an array
 * @param {number[]} numbers // input an array of numbers
 * @returns {{median: number}} // returns type number
 */
function median (numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('The passed argument is not an array.')
  }
    // exception thrown if array is empty ||typeof numbers[i] === 'string'
  if (numbers.length === 0) {
    throw new Error('The passed array contains no elements.')
  }
  let isNumber = true
  for (let i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i]) || typeof numbers[i] === 'string') {
      isNumber = false
      break
    }
  }
  if (!isNumber) {
    throw new TypeError('The passed array contains not just numbers.')
  }

  let sortedNumbers = []
  for (let i = 0; i < numbers.length; i++) {
    sortedNumbers[i] = numbers[i]
  }
  if (sortedNumbers.length % 2 === 0) {  // is the number even
    sortedNumbers.sort()
    return (sortedNumbers[(sortedNumbers.length / 2) - 1] + sortedNumbers[sortedNumbers.length / 2]) / 2 // finding the middle and if the number of arrays is even add the 2 middle numbers and divide by 2. -1 for array positioning
  } else {
    sortedNumbers.sort()
    return sortedNumbers[(sortedNumbers.length - 1) / 2] // finding the element in the middle by dividing the array. -1 for posisioning in the array
  }
}

/**
 * finding the smallest number in an array
 * @param {number[]} numbers // input an array of numbers
 * @returns {{minimum: number}} // returns type number
 */
function minimum (numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('The passed argument is not an array.')
  }
    // exception thrown if array is empty ||typeof numbers[i] === 'string'
  if (numbers.length === 0) {
    throw new Error('The passed array contains no elements.')
  }
  let isNumber = true
  for (let i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i]) || typeof numbers[i] === 'string') {
      isNumber = false
      break
    }
  }
  if (!isNumber) {
    throw new TypeError('The passed array contains not just numbers.')
  }
  let smallest = numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    if (smallest > numbers[i]) {  // compares the number in the index with smallest
      smallest = numbers[i]      // smallest equals number
    }
  }
  return smallest
}

/**
 * find the number that is repeated more often than any other
 * @param {number[]} numbers // input an array of numbers
 * @returns {{mode: number}} // returns type number
 */
function mode (numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('The passed argument is not an array.')
  }
    // exception thrown if array is empty ||typeof numbers[i] === 'string'
  if (numbers.length === 0) {
    throw new Error('The passed array contains no elements.')
  }
  let isNumber = true
  for (let i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i]) || typeof numbers[i] === 'string') {
      isNumber = false
      break
    }
  }
  if (!isNumber) {
    throw new TypeError('The passed array contains not just numbers.')
  }
  var keys = []
  var count = []

  for (var i = 0; i < numbers.length; i++) {
    var exist = false
    var pos = 0
    for (var j = 0; j < keys.length; j++) {
      if (keys[j] === numbers[i]) {
        pos = j
        exist = true
        break
      }
    }

    if (exist) {
      count[pos] ++
    } else {
      var position = keys.length
      keys[position] = numbers[i]
      count[position] = 1
    }
  }

  let maxOfInstances = maximum(count)

  let returnArray = []

  for (let j = 0; j < count.length; j++) {
    if (count[j] === maxOfInstances) {
      returnArray[returnArray.length] = keys[j]
      returnArray.sort()
    }
  }
  return returnArray
}

/**
 * the difference between the largest and smallest number in the array
 * @param {number[]} numbers // input an array of numbers
 * @returns {{range: number}} // returns type number
 */
function range (numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('The passed argument is not an array.')
  }
    // exception thrown if array is empty ||typeof numbers[i] === 'string'
  if (numbers.length === 0) {
    throw new Error('The passed array contains no elements.')
  }
  let isNumber = true
  for (let i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i]) || typeof numbers[i] === 'string') {
      isNumber = false
      break
    }
  }
  if (!isNumber) {
    throw new TypeError('The passed array contains not just numbers.')
  }
  let min = minimum(numbers) // uses the function minimum to get the smallest number
  let max = maximum(numbers) // uses the function maximum to get the largest number
  let rangeRetur = max - min  // calculates the range
  return rangeRetur
}

/**
 * gives the spread of the numbers in the array from the average number
 * @param {number[]} numbers // input an array of numbers
 * @returns {{standardDeviation: number}} // returns type number
 */
function standardDeviation (numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('The passed argument is not an array.')
  }
    // exception thrown if array is empty ||typeof numbers[i] === 'string'
  if (numbers.length === 0) {
    throw new Error('The passed array contains no elements.')
  }
  let isNumber = true
  for (let i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i]) || typeof numbers[i] === 'string') {
      isNumber = false
      break
    }
  }
  if (!isNumber) {
    throw new TypeError('The passed array contains not just numbers.')
  }

  let average = mean(numbers)
  let numerator = 0
  for (let i = 0; i < numbers.length; i++) { // loops through the array
    numerator += (numbers[i] - average) * (numbers[i] - average) // the sum minus the average squared in the array
  }
  let NumDivDenom = numerator / (numbers.length) // divides the numerator with the numbera of elements minus 1
  let standardD = Math.sqrt(NumDivDenom) // square root
  return standardD
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
