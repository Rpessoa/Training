/**
* ROT13 decypher. Can be used to encrypt and decrypt messages using ROT13
* just change the "rot13" variable with the message to encrypt and if you need
* to decrypt it, just pass the encrypted message to the "rot13" variable
*/

// The string that you want to decypher using rot13
const rot13 = "PBQVAT VF SHA";

// find all the characters code from the string
const splitAndNumberThis = function(string) {
   return string.split('')
        .map((elem) => elem.charCodeAt());
};

// takes all characters code and change them to decypher them using ROT13 system
const findThisChar = function(array) {
   return array.map(function(elem) {
        return (elem >= 65 && elem <= 77) ? String.fromCharCode(elem + 13) : (elem > 77) ? String.fromCharCode(elem - 13) : String.fromCharCode(elem);
    });
};

console.log(findThisChar(splitAndNumberThis(rot13)).join(""));
