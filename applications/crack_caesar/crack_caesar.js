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

    console.log(`Words:`, words.length)

    let text_letters = {'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0, 'F': 0, 'G': 0, 'H': 0, 'I': 0, 'J': 0, 'K': 0, 'L': 0, 'M': 0, 'N': 0, 'O': 0, 'P': 0, 'Q': 0, 'R': 0, 'S': 0, 'T': 0, 'U': 0, 'V': 0, 'W': 0, 'X': 0, 'Y': 0, 'Z': 0}

    for(let i = 0; i < words.length; i++){
        for(let h = 0; h < alphabet.length; h++){
            console.log(words[i] === alphabet[h], words[i], alphabet[h])

            if(words[i] === alphabet[h]){
                text_letters.alphabet[h]++
            }
            else if(words[i] !== alphabet[h]){
                h++
            }
            h++
        }
        console.log(text_letters)
        // if(words[i] === 'A'){
        //     text_letters.A++
        // }
        // else if(words[i] === 'B'){
        //     text_letters.B++
        // }
        // else if(words[i] === 'C'){
        //     text_letters.C++
        // }
        // else if(words[i] === 'D'){
        //     text_letters.D++
        // }
        // else if(words[i] === 'E'){
        //     text_letters.E++
        // }
        // else if(words[i] === 'F'){
        //     text_letters.I++
        // }
        // else if(words[i] === 'G'){
        //     text_letters.I++
        // }
        // else if(words[i] === 'H'){
        //     text_letters.I++
        // }
        // else if(words[i] === 'I'){
        //     text_letters.I++
        // }

    }

    console.log(text_letters)
}

crack_caesar('cipher.txt')