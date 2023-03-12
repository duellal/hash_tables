const {word_count} = require('./word_count')

describe('word_count', ()=>{
    it('[1] returns an empty dictionary when no words are given', ()=>{
        expect(word_count('')).toEqual({})
        expect(word_count('":;,.-+=/\\|[]{}()*^&')).toEqual({})
    })
    
    it('[2] returns a dictionary of words and their counts', ()=>{
        expect(word_count('Hello    hello')).toEqual({hello: 2})
        
        expect(word_count('Hello, my cat.  And my cat doesn\'t say "hello" back.')).toEqual({hello: 2, my: 2, cat: 2, and: 1, "doesn't": 1, say: 1, back: 1})
        
        expect(word_count('This is a test of the  Emergency  Broadcast  Network. This is only a test.')).toEqual({this: 2, is: 2, a: 2, test: 2, of: 1, the: 1, emergency: 1, broadcast: 1, network: 1, only: 1})
        
        expect(word_count('a a\ra\na\ta \t\r\n')).toEqual({a: 5})
    })
})