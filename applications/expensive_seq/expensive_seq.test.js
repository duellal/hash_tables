const {expensive_seq} = require('./expensive_seq')

describe('Expensive Sequence', ()=>{
    it('Creates a sequence without timing out', ()=>{
        let first10 = [0, 73, 712, 5233, 36592, 246773, 1623280, 10496585, 66941152, 421957189];
        
        for(let i = 0; i < 10; i++){
            let x = expensive_seq(i*2, i*3, i*4)
            expect(x).toEqual(first10[i])
        }
        x = expensive_seq(150, 400,800)
        expect(x).toEqual(348089347602676380885589070822523585642423790379026639337628)
    })
})