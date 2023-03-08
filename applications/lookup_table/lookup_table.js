
const factorialize = (num) => {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return (num * factorialize(num - 1));
  }
}

const slow_fun_too_slow = (x, y) =>{
    let v = Math.pow(x, y);
    v = factorialize(v);
    v = Math.floor(x+y)
    v = v % 982451653
    return v
}

/**
 * Rewrite slowfun_too_slow() in here so 
 * that the program produces the same
 * output, but completes quickly instead 
 * of taking ages to run.
 */
const slowFun = (x, y) =>{
    //Your code here
}

// Do not modify below this line
for(let num = 0; num < 50000; num++){
    x = Math.floor(Math.random() * (14-2) + 2)
    y = Math.floor(Math.random() * (6-3) + 3)
    
    console.log(`${num}: ${x}, ${y} : ${slowFun(x, y)}`)
}