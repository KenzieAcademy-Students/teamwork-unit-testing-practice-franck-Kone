// To run the code, open it in the browser using the VS Code Live Server then open the console. 
// You can directly call these function in the console to test.

// Here is the kenzieAssert function for your convenience. 
// Note: Typically, unit tests would be in a separate file, but for this activity, you may put your tests in this file.
function kenzieAssert(paramObject) {
    let actual = paramObject.actual;
    let expected = paramObject.expected;
    if (actual === expected) {
        console.log(`PASS Test #${paramObject.testNumber} ${paramObject.testFunction}`);
    } else {
        console.error(`FAIL Test #${paramObject.testNumber} ${paramObject.testFunction}`,
            {
                test: paramObject.failureMessage,
                expected: expected,
                actual: actual,
            }
        );
    }
}

/*  --------------------------------------------------------
    checkIfPalindrome()

    Determine if a string is a palindrome. 
    If it is, return true. Otherwise, return false.
    The string must be at least three (3) characters. 
    Capitalization doesn't matter. 

    For example:
        "Radar" returns true
        "e" returns false
        "hannah" returns true
*/

const checkIfPalindrome = function (word) {
    if (word.split('').reverse().join('') === word) {
        return true;
    }
    return false;
}

// Write your unit tests here
let testSingleWords = [
    "racecar",
    "radar",
    "Radar",
    "egg",
    "noon",
    "Level",
    "hannah",
    "e",
    "kayak",
    "mom",
    "Eevee",
    "saippuakivikauppias",
    "magnificent",
];

// checkIfPalindrome(testSingleWords)
console.log("----------Single Word Palindrome Unit test #1---------- ")

kenzieAssert({

    actual: checkIfPalindrome(testSingleWords[2]),
    expected: false,
    testNumber: 1,
    testFunction: 'Single Word Palindrome #1',
    failureMessage: `Single Word Palindrome #1 should return true`,
})

// checkIfPalindrome(testSingleWords)
console.log("----------Single Word Palindrome Unit test #2---------- ")

kenzieAssert({
    actual: checkIfPalindrome(testSingleWords[testSingleWords.length - 2]),
    expected: true,
    testNumber: 2,
    testFunction: 'Single Word Palindrome #2',
    failureMessage: `Single Word Palindrome #2 should return true`,
})

/*  --------------------------------------------------------
    combineThePhrase()

    In order to determine if a phrase (a.k.a. multiple words) is a palindrome, we'll need to put all the characters together. 
    This function should return a single string.
    Punctuation should be left out. 
    Feel free to have a unit test (or more than one) also test if the text is a palindrome.
        Hint: This will involve more than one function call.

    For example:
        "Murder for a jar of red rum" returns "Murderforajarofredrum"
        "the greater good" returns "thegreatergood"
*/


// Write your unit tests here
const combineThePhrase = function (text) {

    const funct1 = function () {
        return text.replaceAll(' ', '')
    }

    return checkIfPalindrome(funct1())
}

let testPhrasesNoPunctuation = [
    "taco cat",
    "Murder for a jar of red rum",
    "top spot",
    "ham or turkey",
    "my gym",
    "Step on no pets",
    "this is not a palindrome",
    "I sure hope it does",
    "A nut for a jar of tuna",
    "the greater good",
    "never odd or even",
    "evil olive",
];



//Unit test # 1
console.log("----------Combine Phrases Palindrome Unit test #1---------- ")
kenzieAssert({
    actual: combineThePhrase(testPhrasesNoPunctuation[1]),
    expected: false,
    testNumber: 1,
    testFunction: 'Combine Phrases Palindrome #1',
    failureMessage: `Combine Phrases Palindrome #1 should return true`,
})

console.log("----------Combine Phrases Palindrome Unit test #2---------- ")
kenzieAssert({
    actual: combineThePhrase(testPhrasesNoPunctuation[4]),
    expected: true,
    testNumber: 2,
    testFunction: 'Combine Phrases Palindrome #2',
    failureMessage: `Combine Phrases Palindrome #2 should return true`,
})
/*  --------------------------------------------------------
    removePunctuation()

    In this activity, punctuation will have no bearing on whether a string is a palindrome or not. 
    Find a way to remove all punctuation (a.k.a. anything that's not a letter), and return the updated string. 
    Feel free to have a unit test (or more than one) also test if the text is a palindrome.
        Hint: This will involve more than one function call.
	
    For example:
        "red rum, sir, is murder" returns "red rum sir is murder"
        "What's new, pussycat?" returns "Whats new pussycat" 
*/

const removePunctuation = function (text) {

    const funct1 = text.replaceAll(/[.,\/#!$%\^&\*;?:{}=\-_`~()]/g, "")

   const funct2 = function () {
        return combineThePhrase(funct1)
    }
    
    return funct2()
}


let testPhrasesWithPunctuation = [
    "no lemon, no melon",
    "I did, did I?",
    "Don't nod.",
    "Am I a palindrome?",
    "What's new, pussycat?",
    "red rum, sir, is murder",
    "Sit on a potato pan, Otis",
    "Nobody tells me nothing!",
];

// const aString = "saksj-m_l,o/l*0!?){"

// const result = aString.replaceAll(/[.,\/#!$%\^&\*;?:{}=\-_`~()]/g, "")
// Write your unit tests here
console.log("----------Remove Punctuation Palindrome Unit test #1---------- ")

kenzieAssert({
    actual: removePunctuation(testPhrasesWithPunctuation[1]),
    expected: true,
    testNumber: 1,
    testFunction: 'Remove Punctuation Palindrome #1',
    failureMessage: `Remove Punctuation Palindrome #1 should return true`,
})

console.log("----------Remove Punctuation Palindrome Unit test #2---------- ")

kenzieAssert({
    actual: removePunctuation(testPhrasesWithPunctuation[3]),
    expected: false,
    testNumber: 2,
    testFunction: 'Remove Punctuation Palindrome #2',
    failureMessage: `Remove Punctuation Palindrome #2 should return true`,
})

console.log("----------Remove Punctuation Palindrome Unit test #3---------- ")

kenzieAssert({
    actual: removePunctuation(testPhrasesWithPunctuation[0]),
    expected: true,
    testNumber: 3,
    testFunction: 'Remove Punctuation Palindrome #3',
    failureMessage: `Remove Punctuation Palindrome #3 should return true`,
})

/*  --------------------------------------------------------
    findThePalindrome()

    Given a string, determine if there's a palindrome somewhere within.
    If a palindrome exists, return it's position in the string and what the palindrome is as an array. 
    If there are multiple instances of a palindrome, return only the first. 
    Otherwise, return undefined.

    For example:
        "Aibohphobia is a fear of palindromes" returns [0, "Aibohphobia"]
        "Never give up; never surrender!" returns undefined
        "What's the difference between a kayak and a canoe?" returns [32, "kayak"] 
*/

const findThePalindrome = function (text) {
    
    const removePunctionToText = text.replaceAll(/[.,\/#!$%\^&\*;?:{}=\-_`~()]/g, "")

    const textToArray = removePunctionToText.split(' ')

    for ( aWord of textToArray ) {

        const aWordReversed = aWord.split('').reverse().join('')

        if (text.toLowerCase().indexOf(aWordReversed.toLowerCase()) > -1) {
            return [text.indexOf(aWord), aWord ]
        }
    }
    return undefined
}


let testPhrasesToFindPalindrome = [
    "Morning noon night",
    "Never give up; never surrender!",
    "There are seven evolutions for Eevee",
    "Aibohphobia is a fear of palindromes",
    "What's the difference between a kayak and a canoe?",
    "After level 10 is level 11",
    "a racecar is cooler than a bumper car",
    "Nyan nyan nyan nyan nyan nyan",
];

// Write your unit tests here
console.log("----------Find the Palindrome Unit test #1---------- ")

kenzieAssert({
    actual: JSON.stringify(findThePalindrome(testPhrasesToFindPalindrome[0])),
    expected: JSON.stringify([8, 'noon']),
    testNumber: 1,
    testFunction: 'Find the Palindrome #1',
    failureMessage: `Find the Palindrome #1 should return [8, 'noon']`,
})

console.log("----------Find the Palindrome Unit test #2---------- ")

kenzieAssert({
    actual: JSON.stringify(findThePalindrome(testPhrasesToFindPalindrome[3])),
    expected: JSON.stringify([0, "Aibohphobia"]),
    testNumber: 2,
    testFunction: 'Find the Palindrome #2',
    failureMessage: `Find the Palindrome #2 should return [0, "Aibohphobia"]`,
})

console.log("----------Find the Palindrome Unit test #3---------- ")

kenzieAssert({
    actual: findThePalindrome(testPhrasesToFindPalindrome[7]),
    expected: undefined,
    testNumber: 3,
    testFunction: 'Find the Palindrome #3',
    failureMessage: `Find the Palindrome #3 should return undefined`,
})




