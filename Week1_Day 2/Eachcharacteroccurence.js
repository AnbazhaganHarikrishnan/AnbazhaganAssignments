let nameval = 'anbazhagan'
let count = 0
for (let i = 0; i < nameval.length; i++) {
    for (let j = 0; j < nameval.length; j++) {
        if (nameval[i] === nameval[j]) {
            count++;
        }
    }
    console.log("Number of occurences for " + nameval[i] + " is: " + count)
    count = 0
}