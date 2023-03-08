# Hash Tables

## No Collision Resolution 

Task: Implement a basic hash table without collision resolution.

File: [no_collision_resolution.js](/hashtable/no_collision_resolution.js)

Test: [no_collision_resolution.test.js](/hashtable/no_collision_resolution.test.js)

The above test program is unlikely to have collisions, but it's certainly possible for various hashing functions. With DJB2 (32 bit) and FNV-1 (64 bit) hashing functions, there are no collisions.

1. Implement a `HashTable` class and `HashTableEntry` class.

2. Implement a good hashing function.

   Recommend either of:

   - DJB2
   - FNV-1 (64-bit)

   You are allowed to Google for these hashing functions and implement from psuedocode.

3. Implement the `hash_index()` that returns an index value for a key.

4. Implement the `resize()`, `put()`, `get()`, and `delete()` methods.

## Linked List Chaining for Collision Resolution

Task: Implement linked-list chaining for collision resolution.

File: [LL_collision_resolution.js](/hashtable/LL_collision_resolution.js)

Test: [LL_collision_resolution.test.js](/hashtable/LL_collision_resolution.test.js)

1. Modify `put()`, `get()`, and `delete()` methods from no_collisions_resolution.js to handle collisions.

2. There is no step 2.

Task: Implement load factor measurements and automatic hashtable size
doubling.

1. Compute and maintain load factor.

2. When load factor increases above `0.7`, automatically rehash the
   table to double its previous size.

   Add the `resize()` method.
   
## Hash Table Applications

Task: Complete in any order you would wish. The files are arranged from easier to harder see below:

- [Lookup Table](applications/lookup_table/)
- [Expensive Sequence](applications/expensive_seq/)
- [Word Count](applications/word_count/)
- [No Duplicates](applications/no_dups/)
- [Markov Chains](applications/markov/)
- [Histogram](applications/histo/)
- [Cracking Caesar Ciphers](applications/crack_caesar/)
- [Sum and Difference](applications/sumdiff/)
