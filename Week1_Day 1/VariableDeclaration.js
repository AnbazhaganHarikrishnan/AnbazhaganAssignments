//variable declaration - Var [Reassign and redeclare is possible]
var num = 45
//reassignment num variable
num = 50
//redeclare the num variable
var num = true
console.log("Type of num variable is " + typeof num + " and its value is " + num)

//let - Variable declaration [Reassign is possible but not redeclaration]
let empname = 'testing'
//reassign empname value
empname = 'Automationtesting'
//try to redeclare the variable
//let empname='manualtesting' - it will throw an error
console.log("Type of empname variable is " + typeof empname + " and its value is " + empname)

//const - Variable declaration [Reassign and redeclaration is not possible]
const final = 34
//reassign the final value - It will throw an erro while compiling the script
//final=35 
//redeclare the final value - It will throw an error
//const final=35
console.log("Type of final variable is " + typeof final + " and its value is " + final);


