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
            this.capacity = 8
         }

        this.table = new Array(this.capacity)
        
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i]){
                return this.table[i]
            }
        }
    }
    
    get_num_slots(){
        return this.capacity
    }
    
    /**
     * NV-1 Hash, 64-bit
     * Implement this, and/or DJB2.
     */
    fnv1(key){
        let total = 0

        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i)
        }

        return total
    }
    
    /**
     * DJB2 hash, 32-bit
     * Implement this, and/or DJB2.
     */
    djb2(key){
        //your code here
    }

    /**
     * Take an arbitrary key and return a valid integer index between within the storage capacity of the hash table.
     */
    hash_index(key){ 
        return this.fnv1(key) % this.capacity
        // return this.djb2(key) % this.capacity
    }
    
    /**
     * 
     *   Store the value with the given key.
     * Hash collisions should be handled with Linked List Chaining.
     */
    // Also "set"
    put(key, value){
        const index = this.hash_index(key)

        this.table[index] = value
    }
    
    /**
     * 
     * Remove the value stored with the given key
     * Print a warning if the key is not found.
     */
    delete(key){
        const index = this.hash_index(key)

        this.table[index] = null
    }
    
    /**
     * 
     *  Retrieve the value stored with the given key.
     *  Returns null if the key is not found.
     */
    get(key){
        const index = this.hash_index(key)

        return this.table[index]
    }
    
    /**
     * 
     * Changes the capacity of the hash table and rehashes all key/value pairs
     */
    resize(new_capacity){
        let old_table = this.table 
        console.log(`Old Table:`, old_table)

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

let ht = new HashTable(8) 
ht.put("line_1", "'Twas brillig, and the slithy toves")
ht.put("line_2", "Did gyre and gimble in the wabe:")
ht.put("line_3", "All mimsy were the borogoves,")
ht.put("line_4", "And the mome raths outgrabe.")
ht.put("line_5", '"Beware the Jabberwock, my son!')
ht.put("line_6", "The jaws that bite, the claws that catch!")
ht.put("line_7", "Beware the Jubjub bird, and shun")
ht.put("line_8", 'The frumious Bandersnatch!"')
ht.put("line_9", "He took his vorpal sword in hand;")
ht.put("line_10", "Long time the manxome foe he sought--")
ht.put("line_11", "So rested he by the Tumtum tree")
ht.put("line_12", "And stood awhile in thought.")

// console.log('Hash Table:', ht)

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

