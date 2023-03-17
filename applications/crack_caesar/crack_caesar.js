const fs = require('fs');
const path = require('path')

// use frequency analysis to find the key to ciphertext.txt and then decode it

const eng_freq = {'E': '11.53', 'T':'9.75', 'A':'8.46', 'O':'8.08', 'H':'7.71', 'N':'6.73', 'R':'6.29', 'I':'5.84', 'S':'5.56', 'D':'4.74', 'L':'3.92', 'W':'3.08', 'U':'2.59', 'G':'2.48', 'F':'2.42', 'B':'2.19', 'M':'2.18', 'Y':'2.02', 'C':'1.58', 'P':'1.08', 'K':'0.84', 'V':'0.59', 'Q':'0.17', 'J':'0.07', 'X':'0.07', 'Z':'0.03'}

const invert_eng_freq = {}

for(const k of Object.keys(eng_freq)){
    let v = parseFloat(eng_freq[k])
    invert_eng_freq[v] = k;
}

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

    //Calculating the percentage for the frequency each letter is found in the text:
    let total_letters = Object.values(text_letters).reduce((a, b) => {
       return a + b
    }, 0)

    const text_letters_values = Object.values(text_letters)
    const text_letters_kets = Object.keys(text_letters)

    for(const letter in text_letters){
        for(let h = 0; h < alphabet.length; h++){
            if(letter === alphabet[h]){
                text_letters[alphabet[h]] = (text_letters[alphabet[h]]/total_letters * 100).toFixed(2)
                }

        }
    }

    //Pairing the 2 frequency tables to get the cipher:
    // for(let i = 0; i < text_letters.length; i++){
    //     for(let h = 0; h < eng_freq.length; h++){
    //         if(Object.values(text_letters[i]))
    //     }
    // }

    console.log(invert_eng_freq)
    console.log(`Text Letters Frequency:`, text_letters)
    const freq_letters = Object.values(text_letters)
    console.log(freq_letters[0])
    
    //Applying cipher on text + getting result:


    console.log(`Text Letters Frequency:`, text_letters)
}

// console.log(`Cracking the text:`, crack_caesar('chipher.txt'))
crack_caesar('cipher.txt')