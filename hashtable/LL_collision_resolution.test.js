const {HashTable} = require("./LL_collision_resolution");

describe('Test HashTable', ()=>{
    let ht; 
    let return_value;
    const table = {'key-0': 'val-0', "key-1": 'val-1',
    'key-2': 'val-2', "key-3": 'val-3','key-4': 'val-4', "key-5": 'val-5', 'key-6': 'val-6', "key-7": 'val-7', 'key-8': 'val-8', "key-9": 'val-9'
    }
    const table_keys = Object.keys(table);
    
    beforeEach(()=>{
        ht = new HashTable(10000)
        table_keys.forEach(key => {
            ht.put(key, table[key])
        })
   })
   
   it('[1] inserts and retrieves correctly', ()=>{          
        table_keys.forEach(key => {
            return_value = ht.get(key)
            expect(return_value).toEqual(table[key])
        })
    })
    
    it('[2] put overwrites correctly', ()=>{  
        table_keys.forEach((key, index) => {
            ht.put(key, `new-val-${index}`)
        })
        
        table_keys.forEach((key, index) => {
            return_value = ht.get(key)
            expect(return_value).toEqual(`new-val-${index}`)
        })
    })
    
    it('[3] removes correctly', ()=>{
        ht.delete("key-7")
        ht.delete("key-6")
        ht.delete("key-5")
        ht.delete("key-4")
        ht.delete("key-3")
        ht.delete("key-2")
        ht.delete("key-1")
        ht.delete("key-0")
        
        table_keys.forEach((key, index) => {
            return_value = ht.get(key)
            if(index < 8){
                expect(return_value).toBeNull()
            } else {
                expect(return_value).toEqual(`val-${index}`)
            }
        })
        
        ht.delete("key-9")
        ht.delete("key-8")
        return_value = ht.get("key-8")
        expect(return_value).toBeNull()
        return_value = ht.get("key-9")
        expect(return_value).toBeNull()
    })
    
    it('[4] resizes correctly', ()=>{
        ht.resize(1024)
        expect(ht.get_num_slots).toEqual(1024)
        
        table_keys.forEach(key => {
            return_value = ht.get(key)
            expect(return_value).toEqual(table[key])
        })
    })
    
})