var x = 40
var y = 20
var z = 10


if ((x > y) && (x < z)){

    console.log (y,x,z)

}else if ((y > x) && (y < z)){

    console.log (x,y,z)

}else if ((z > x) && (z < y))
{
    console.log (x,z,y)

}else if ((x > z) && (x < y)){

    console.log (z,x,y)

}else if ((y > z) && (y < x)){

    console.log (z,y,x)

}else if ((z > y) && (z < x))
{
    console.log (y,z,x)
}