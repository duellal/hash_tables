const {HashTable} = require("./no_collision_resolution");

describe('Test HashTable', ()=>{
    let ht; 
    let return_value;
    
    beforeEach(()=>{
        ht = new HashTable(10000)
   })
   
   it('[1] inserts and retrieves correctly', ()=>{
        ht.put("key-0", "val-0")
        ht.put("key-1", "val-1")
        ht.put("key-2", "val-2")
        
        return_value = ht.get('key-0')
        expect(return_value).toEqual('val-0')
        
        return_value = ht.get('key-1')
        expect(return_value).toEqual('val-1')
        
        return_value = ht.get('key-2')
        expect(return_value).toEqual('val-2')
    })
    
    it('[2] put overwrites correctly', ()=>{
        ht.put("key-0", "val-0")
        ht.put("key-1", "val-1")
        ht.put("key-2", "val-2")

        ht.put("key-0", "new-val-0")
        ht.put("key-1", "new-val-1")
        ht.put("key-2", "new-val-2")
        
        return_value = ht.get('key-0')
        expect(return_value).toEqual('new-val-0')
        
        return_value = ht.get('key-1')
        expect(return_value).toEqual('new-val-1')
        
        return_value = ht.get('key-2')
        expect(return_value).toEqual('new-val-2')

    })
    
    it('[3] removes correctly', ()=>{
        ht.put("key-0", "val-0")
        ht.put("key-1", "val-1")
        ht.put("key-2", "val-2")
        
        ht.delete("key-2")
        ht.delete("key-1")
        ht.delete("key-0")
        
        return_value = ht.get('key-0')
        expect(return_value).toBeNull()
        
        return_value = ht.get('key-1')
        expect(return_value).toBeNull()
        
        return_value = ht.get('key-2')
        expect(return_value).toBeNull()
    })
    
})