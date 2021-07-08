/*
 Write a program to read 3 integer values ​​(assume they will not be equal values) 
 and write them in  ascending order. in JS 
*/


var v1 = 3
var v2 = 50
var v3 = 30


if ((v1 > v2) && (v1 < v3)) {
    console.log(v2, v1, v3)

} else if ((v2 > v1) && (v2 < v3)) {
    console.log(v1, v2, v3)

} else if ((v3 > v1) && (v3 < v2)) {
    console.log(v1, v3, v2)

} else if ((v1 > v3) && (v1 < v2)) {
    console.log(v3, v1, v2)

} else if ((v2 > v3) && (v2 < v1)) {
    console.log(v3, v2, v1)

} else  {
    console.log(v2, v3, v1)
}