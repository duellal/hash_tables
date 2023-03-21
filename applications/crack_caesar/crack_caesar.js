/* ASCII implementation */
const fs = require('fs');
const path = require('path');

// use frequency analysis to find the key to ciphertext.txt and then decode it

const eng_freq = {'E': '11.53', 'T':'9.75', 'A':'8.46', 'O':'8.08', 'H':'7.71', 'N':'6.73', 'R':'6.29', 'I':'5.84', 'S':'5.56', 'D':'4.74', 'L':'3.92', 'W':'3.08', 'U':'2.59', 'G':'2.48', 'F':'2.42', 'B':'2.19', 'M':'2.18', 'Y':'2.02', 'C':'1.58', 'P':'1.08', 'K':'0.84', 'V':'0.59', 'Q':'0.17', 'J':'0.07', 'X':'0.07', 'Z':'0.03'}

const crack_caesar = async fileName => {
    //gets words from file    
    const words = await fs.readFileSync(path.join(__dirname, fileName), 'utf-8')

    //Getting ASCII numbers for each character in the text:
    let ascii_text = []

    for(let i = 0; i < words.length; i++){
        ascii_text.push(words.charCodeAt(i))
    }

    // Getting the number of letters in the text:  
    let letter_code = new Object()

     for(let i = 0; i < ascii_text.length; i++){
        if(ascii_text[i] > 64 && ascii_text[i] < 91){
            if(Object.keys(letter_code).find(letter => {
                return letter === String.fromCharCode(ascii_text[i])
            })){
            letter_code[String.fromCharCode(ascii_text[i])]++
            } else{
                letter_code[String.fromCharCode(ascii_text[i])] = 1
            }
        }
    }
    
    // // Total amount of letters in the text:
    let total_letters = Object.values(letter_code).reduce((a, b) => {
       return a + b 
    }, 0)

    // //Calculating the percentage for the frequency each letter is found in the text:
    for(const char in letter_code){
        letter_code[char] = ((letter_code[char]/total_letters)*100).toFixed(2)
    }

    //Pairing the 2 frequency tables to get the cipher:
    let cipher = new Object()

    for(const letter in letter_code){
        for(const alpha in eng_freq){
            if(letter_code[letter] === eng_freq[alpha]){
                let code = letter.charCodeAt()
                cipher[code] = alpha
                delete letter_code[letter]
                delete eng_freq[alpha]
            }
        }
    }

    //Applying cipher on text + getting result:
    let decoded_text = ''

    for(let i = 0; i < ascii_text.length; i++){
        if(ascii_text[i] < 65 || ascii_text[i] > 90){
            decoded_text = decoded_text + String.fromCharCode(ascii_text[i])
        }
        for(const c in cipher){
            let keyAsNum = parseInt(c)
            if(ascii_text[i] === keyAsNum){
               decoded_text = decoded_text + cipher[c]
            }
        }
    }

    console.log(decoded_text)
    return decoded_text
}

crack_caesar('cipher.txt')


/* 
This was the code before the ASCII implementation. I got the cipher to work mostly. The 'X' and 'J' were the only problem in this code.

During the for loop for making the cipher, the 'X' or the 'J' would get overwritten. I tried working the code and thinking of how not to have this
*/

/*
const fs = require('fs');
const path = require('path');
const { decode } = require('punycode');

// use frequency analysis to find the key to ciphertext.txt and then decode it

const eng_freq = {'E': '11.53', 'T':'9.75', 'A':'8.46', 'O':'8.08', 'H':'7.71', 'N':'6.73', 'R':'6.29', 'I':'5.84', 'S':'5.56', 'D':'4.74', 'L':'3.92', 'W':'3.08', 'U':'2.59', 'G':'2.48', 'F':'2.42', 'B':'2.19', 'M':'2.18', 'Y':'2.02', 'C':'1.58', 'P':'1.08', 'K':'0.84', 'V':'0.59', 'Q':'0.17', 'J':'0.07', 'X':'0.07', 'Z':'0.03'}

const crack_caesar = async fileName => {
    //gets words from file    
    const words = await fs.readFileSync(path.join(__dirname, fileName), 'utf-8')

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let text_letters = {'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0, 'F': 0, 'G': 0, 'H': 0, 'I': 0, 'J': 0, 'K': 0, 'L': 0, 'M': 0, 'N': 0, 'O': 0, 'P': 0, 'Q': 0, 'R': 0, 'S': 0, 'T': 0, 'U': 0, 'V': 0, 'W': 0, 'X': 0, 'Y': 0, 'Z': 0}

    // Getting the number of letters in the text:
    for(let i = 0; i < words.length; i++){
        for(let h = 0; h < alphabet.length; h++){
            if(words[i] === alphabet[h]){
                text_letters[alphabet[h]]++
            }
        }
    }
    
    // Total amount of letters in the text:
    let total_letters = Object.values(text_letters).reduce((a, b) => {
       return a + b 
    }, 0)

    //Calculating the percentage for the frequency each letter is found in the text:
    for(const letter in text_letters){
        for(let h = 0; h < alphabet.length; h++){
            if(letter === alphabet[h]){
                text_letters[alphabet[h]] = (text_letters[alphabet[h]]/total_letters * 100).toFixed(2)
                }
        }
    }

    //Pairing the 2 frequency tables to get the cipher:
    let cipher = new Object()

    for(const letter in text_letters){
        for(const num in eng_freq){
            if(text_letters[letter] === eng_freq[num]){
                cipher[letter] = num
                delete text_letters[letter]
                delete eng_freq[num]
            }
        }
        // console.log(Object.keys(text_letters))
    }

    console.log(`Cipher Keys:`, Object.keys(cipher))
    console.log(`Cipher Values:`, Object.values(cipher).sort())

    //adding punctuation to cipher:
    cipher[` `] = ` `
    cipher[`.`] = `.`
    cipher[`,`] = `,`
    cipher[`?`] = `?`
    cipher[`;`] = `;`
    cipher[`!`] = `!`
    cipher[`"`] = `"`
    cipher[`\n`] = `\n`
    cipher[`1`] = `1`
    cipher[`(`] = `(`
    cipher[`)`] = `)`
    
    //Applying cipher on text + getting result:
    let decoded_text = ''

    for(let i = 0; i < words.length; i++){
        for(const c in cipher){
            // c is the key + cipher[c] is the value
            if(words[i] === c){
               decoded_text = decoded_text + cipher[c]
            }
        }
    }

    console.log(`Decoded Text:`, decoded_text)
    return decoded_text
}

crack_caesar('cipher.txt')
*/