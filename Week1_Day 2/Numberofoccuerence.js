let val = 'character'
let charval = 'a'
let count = 0
for (let i = 0; i < val.length; i++) {
    if (val[i] === charval) {
        count++;
    }

}
console.log("Number of occurences is :" + count)