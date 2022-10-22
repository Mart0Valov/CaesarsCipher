const isLetter = letter => (/[a-zA-Z]/).test(letter)
const decode =  letter => {
    let letterInASCII = letter.charCodeAt(0);
    if (letterInASCII - 13 < 65) {
        return letterInASCII + 13;
    } else {
        return letterInASCII - 13;
    }
}
const fromASCII = number => String.fromCharCode(number);


function rot13(str) {
    const result = [];
    str.split('').forEach(letter => {
        if (isLetter(letter)){
            result.push(fromASCII(decode(letter)));
        } else {
            result.push(letter);
        }
    });

    return result.join('');
}

const res = rot13("SERR PBQR PNZC");
console.log(res);