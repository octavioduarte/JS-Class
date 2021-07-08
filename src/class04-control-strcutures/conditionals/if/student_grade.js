/*
    Write a program that analyzes the username and password of a 
    college system and returns errors (if any) and on success returns 
    a welcome message
*/

const student= "Gabriel"
const password = "1234"

if (student !== "Gabriel") {
    console.log(`${student} is a invalid user`)

 } else if (password !== "1234") {
    console.log(`${password} is a invalid password`)
} else {
    console.log("Welcome to System !!! ")
}
