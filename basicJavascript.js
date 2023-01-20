function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED. EXPECTED: " + expected + " found: " + found;
    }
}

function myFunctionTest2(expected, found) {
    if (JSON.stringify(expected) === JSON.stringify(found)) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED. EXPECTED: " + expected + " found: " + found;
    }
}


// Define a function max() that takes two numbers as arguments and returns the largest of them

function max(num1, num2) {
    if (num1 > num2)
        return num1;
    else
        return num2;
}
console.log("Expected output of max(20,10) is 20 and  " +
    myFunctionTest(20, max(20, 10)));



// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(num1, num2, num3) {
    if (max(num1, num2) > max(num2, num3)) {
        return max(num1, num2);
    } else
        return max(num2, num3);
}

console.log("Expected output of maxOfThree(66,22,80) is 80 and  " +
    myFunctionTest(80, maxOfThree(66, 22, 80)));
console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(1,4,2) is 4  " + myFunctionTest(4, maxOfThree(1, 4, 2)));


//Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(character) {
    const vowel = ['a', 'e', 'i', 'o', 'u', 'y', 'w'];
    if (vowel.includes(character))
        return true;
    return false;
}

console.log("Expected output of isVowel(A) is TRUE  " + myFunctionTest(true, isVowel("a")));
console.log("Expected output of isVowel(D) is FAIL  " + myFunctionTest(false, isVowel("d")));

//Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers.

function sum(array) {
    let sum = 0;
    for(let x in array){
        sum += array[x];
    }
    return sum;
}

function multiply(array) {
    let result = 1;
    for(let x in array){
        result *= array[x];
    }
    return result;
}

console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1,2,3,4])));
console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1,2,3,4])));


//Define a function reverse() that computes the reversal of a string.
function reverse(string) {
    let result='';
    for(let i = string.length-1; i>=0;i--){
        result+= string[i];
    }
    return result;
}

console.log("Expected output of reverse(jag testar) is ratset gaj " + myFunctionTest("ratset gaj", reverse("jag testar")));

//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord(array) {
    let max = 0;
    let result ="";
    array.forEach(element => {
        if(element.length > max)
            max = element.length;
            result = element;
        });
    return result;   
}
console.log("Expected output of findLongestWord([Geeks, GFG, Noidass]) is Noidass " + myFunctionTest("Noidass", findLongestWord(["Geeks", "GFG", "Noidass"])));


//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(array, i) {
    let newArr=[];
    array.forEach(element => {
        if(element.length > i)
            newArr.push(element);
    });
    return newArr;
}
console.log("Expected output of filterLongWords([Geeks, GFG, Noidass]) and 3 is Geeks,Noidass " + myFunctionTest2(["Geeks","Noidass"], filterLongWords(["Geeks", "GFG", "Noidass"],3)));

const a = [1,3,5,3,3]; 
const b = a.map(elem => elem * 10);

const c = a.filter(elem => elem == 3)

const d = a.reduce((prevValue, elem)=> prevValue * elem);

console.log("Expected output of array [1, 3, 5, 3, 3] multiply each element by 10 is [10, 30, 50, 30, 30]  " + myFunctionTest2([10, 30, 50, 30, 30], b));
console.log("Expected output of array [1, 3, 5, 3, 3] return array with all elements equal to 3 is [3, 3, 3]  " + myFunctionTest2([3, 3, 3], c));
console.log("Expected output of array [1, 3, 5, 3, 3] return the product of all elements is 135  " + myFunctionTest2(135, d));
