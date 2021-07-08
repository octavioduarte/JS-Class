/*
    Write a program to read 3 integer values ​​(assuming the values ​​will not be equal)
     and print the largest value between them.
*/

var v1 = 40
var v2 = 40
var v3 = 40

if ((v1 > v2) && (v1 > v3)){

    console.log ("The v1 value is the largest")
}else if ((v2 > v1) && (v2 > v3)){

    console.log ("The v2 value is the largest")
}else if ((v3 > v1) && (v3 > v2))
{
    console.log ("The v3 value is the largest")
} else {

    console.log("Vars with same values")
}