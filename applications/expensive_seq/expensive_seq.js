const expensive_seq = (x, y, z) =>{
    //your code here
}

for(let i = 0; i < 10; i++){
    const x = expensive_seq(i*2, i*3, i*4);
    console.log(`${i*2} ${i*3} ${i*4} = ${x}`)
}

console.log(expensive_seq(150, 400, 800))

module.exports = {expensive_seq}