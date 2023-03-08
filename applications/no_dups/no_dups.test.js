const {no_dups} = require('./no_dups')

describe('No Duplicates', ()=>{
    it('[1] returns an empty string when given an empty string', ()=>{
        expect(no_dups('')).toEqual('')
    })
    
    it('[2] returns the string when there is no duplicates', () => {
        expect(no_dups('hello')).toEqual('hello')
    })
    
    it('[3] removes duplicate words', () => {
        expect(no_dups('cats dogs fish cats dogs')).toEqual('cats dogs fish')
        
        expect(no_dups('spam spam spam eggs spam sausage spam spam and spam')).toEqual('spam eggs sausage and')
    })
})