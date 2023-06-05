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
  return ; 
}

// Write your unit tests here

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

const combineThePhrase = function (text) {
  return ; 
}

// Write your unit tests here

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
  return ; 
}

// Write your unit tests here

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
  return ; 
}

// Write your unit tests here
