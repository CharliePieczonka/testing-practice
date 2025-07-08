function caesarCipher(string, shift) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let alphabetLen = alphabet.length;
    let arr = string.split("")
    let cipher = [];

    arr.forEach((letter) => {
        let letterIndex = alphabet.indexOf(letter.toLowerCase());
        if(letterIndex >= 0) {
            let newLetter = "";
            if(letterIndex + shift > alphabetLen - 1) {
                newLetter = alphabet[(letterIndex + shift) % alphabetLen]
            }
            else {
                newLetter = alphabet[letterIndex + shift];
            }

            if(letter === letter.toUpperCase()) {
                newLetter = newLetter.toUpperCase();
            }

            cipher.push(newLetter);
        }
        else {
            // the character is not a letter in the alphabet, i.e. punctuation, so do not shift it
            cipher.push(letter); 
        }
    });

    return cipher.join("");
}

export { caesarCipher }