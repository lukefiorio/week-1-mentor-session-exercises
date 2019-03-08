
/** Func: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * param {string} str
 * return {string} reversed
 * ie: "cat" => "tac"
 */


function firstReverse(str) {
    
    if (typeof str === 'string') {
        var strArr = str.split("");
        strArr.reverse();
        var revStr = strArr.join("");
        return revStr;
    } else {
        return null;
    }
} 

console.log(firstReverse('will anything work'));

 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */

function alphaOrder(str) {
    if (typeof str === 'string') {
        var strArr = str.split("");
        strArr.sort();
        var sortStr = strArr.join("");
        return sortStr;
    } else {
        return null;
    }
}

console.log(alphaOrder('quick brown fox jumped the fence'));

 /** Function: vowelCount
 * The function will take the num parameter being passed in and
 * return the number of vowels in the string
 * @param {string} num
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */

 function vowelCount(num) {
    if (typeof num === 'string') {
        var vowelArr = ['a','e','i','o','u','A','E','I','O','U'];
        var vowelCount = 0;
        for (var i = 0; i<num.length; i++) {
            if (vowelArr.indexOf(num.charAt(i)) >=0) {
                vowelCount++;
            }
        }
        return vowelCount;
    } else {
        return null;
    }
 }

console.log(vowelCount('tonight Is the nIght'));


 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} str
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */

function timeConvert(str) {
    if (typeof str === 'number') {
        var hours = Math.trunc(str/60);
        var minutes = str - (hours*60);
        return hours+":"+minutes;
    } else {
        return null;
    }
}

console.log(timeConvert(234));

 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */

function repeatString(str,times) {
    if (typeof str === 'string' && typeof times === 'number') {
        if (times<=0) {
            return "";
        } else {
            return str.repeat(times);
        }
    } else {
        return null;
    }
}

console.log(repeatString("Ow! ",3));

/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.  
 * Here we are exporting an object with a bunch of keys that will reference 
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */

module.exports = {
    firstReverse: firstReverse,
    alphaOrder: alphaOrder,
    vowelCount: vowelCount,
    timeConvert: timeConvert,
    repeatString: repeatString
}
