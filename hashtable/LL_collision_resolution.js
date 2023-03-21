class HashTableEntry{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

// Hash table can't have fewer than this many slots
const MIN_CAPACITY = 8

class HashTable {
    /**
     * A hash table that with `capacity` buckets that accepts string keys
     */
    
    constructor(capacity){
        if(capacity >= MIN_CAPACITY){
            this.capacity = capacity
        } else{
            this.capacity = MIN_CAPACITY
        }

        this.table = new Array(this.capacity)
        this.items = 0
    }
    
    /**
     * Return the length of the list you're using to hold the hash able data. (Not the number of items stored in the hash table, but the number of slots in the main list.) One of the tests relies on this.
     */
    get_num_slots(){
        return this.capacity
    }
    
    /**
     * Return the load factor for this hash table.
     */
    get_load_factor(){
        return this.items / this.capacity
    }
    
    /**
     * FNV-1 Hash, 64-bit
     */
    fnv1(key){
        //your code here
    }
    
    /**
     * DJB2 Hash, 32-bit
     */
    djb2(key){
        let total = 0

        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i)
        }

        return total
    }
    
    /**
     * Take an arbitrary key and return a valid integer index between within the storage capacity of the hash table.
     */
    hash_index(key){
        //return this.fnv1(key) % this.capacity
        return this.djb2(key) % this.capacity
    }
    
    /**
     * 
     *   Store the value with the given key.
     * Hash collisions should be handled with Linked List Chaining.
     */
    put(key, value){
        const index = this.hash_index(key)
        let bucket = this.table[index]

        if(!bucket){
            this.table[index] = [[key, value]]
            this.items += 1
        } else {
            
            if(bucket[0][0] === key){
                bucket[0][1] = value
            } else{
                bucket.push([key, value])
                this.items += 1
            }
        }
    }
    
    /**
     * 
     * Remove the value stored with the given key
     * Print a warning if the key is not found.
     */
    delete(key){
        if(!key){
            console.log(`Key ${key} is not found`)
        }

        const index = this.hash_index(key)

        if(this.table[index]){
            this.table[index].splice(this.table[index].indexOf(key), 1)
        }
        return null
    }
    
    /**
     * 
     *  Retrieve the value stored with the given key.
     *  Returns null if the key is not found.
     */
    get(key){
        const index = this.hash_index(key)
        let bucket = this.table[index]

        if(bucket.length === 1){
            return bucket[0][1]
        } 
        else if(bucket.length > 1){
            let sameKeyItem = bucket.filter(item => {
                return item[0] === key
            })

            if(sameKeyItem){
                return sameKeyItem[0][1]
            } else{
                return null
            }
        }
        return null
    }
    
    /**
     * 
     * Changes the capacity of the hash table and rehashes all key/value pairs
     */
    resize(new_capacity){
        let old_table = this.table 

        this.capacity = new_capacity
        this.table = new Array(this.capacity)
        
        for(let i = 0; i < old_table.length; i++){
            if(old_table[i]){
                this.table[i] = old_table[i]
            }
        }
    }
}

module.exports = {HashTable}

// let ht = new HashTable(8) 
// ht.put("line_1", "'Twas brillig, and the slithy toves")
// ht.put("line_2", "Did gyre and gimble in the wabe:")
// ht.put("line_3", "All mimsy were the borogoves,")
// ht.put("line_4", "And the mome raths outgrabe.")
// ht.put("line_5", '"Beware the Jabberwock, my son!')
// ht.put("line_6", "The jaws that bite, the claws that catch!")
// ht.put("line_7", "Beware the Jubjub bird, and shun")
// ht.put("line_8", 'The frumious Bandersnatch!"')
// ht.put("line_9", "He took his vorpal sword in hand;")
// ht.put("line_10", "Long time the manxome foe he sought--")
// ht.put("line_11", "So rested he by the Tumtum tree")
// ht.put("line_12", "And stood awhile in thought.")

// console.log('Hash Table:', ht)
// console.log(`Hash Table Get:`, ht.get("line_1"))

// //Test storing beyond capacity
// for(let i = 0; i < 13; i++){
//     console.log(ht.get(`line_${i}`))
// }

// //Test resizing 
// let old_cap = ht.get_num_slots();
// ht.resize(ht.capacity * 2);
// let new_cap = ht.get_num_slots();

// console.log(`Resized from ${old_cap} to ${new_cap}`)
// console.log(`New Hash Table:`, ht)

// //Test if data intact after resizing
// for(let i = 0; i < 13; i++){
//     console.log(ht.get(`line_${i}`))
// }

// console.log('')