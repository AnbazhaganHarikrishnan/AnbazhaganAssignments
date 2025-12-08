let nameval = "anbazhagan HI"
let name1 = new String("anbazhagan")
console.log(nameval.length)
console.log(nameval.charAt(5))

//index of - it will print the character in which index is presented
console.log(nameval.indexOf("a"))
console.log(nameval.lastIndexOf("a"))

//upper and lower case
console.log(nameval.toUpperCase())
console.log(nameval.toLowerCase())

//split
//console.log(nameval.split(" "))
let sp = nameval.split(" ")
for (let i = 0; i < sp.length; i++) {
    console.log(sp[i])
}
