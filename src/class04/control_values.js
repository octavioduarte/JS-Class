const x = 40
const y = 50
const z = 100


if ((x > y) && (x > z)){

    console.log ("The X value is the largest")

}else if ((y > x) && (y > z)){

    console.log ("The Y value is the largest")

}else if ((z > x) && (z > y))
{
    console.log ("The Z value is the largest")

}  else if ((x === y)&&(x === z)&&(y === x)&&(y === z)&&(z === x)&&(z === y))
{
    console.log ("x,y,z values ​​are duplicated")
}else if ((x === y)){

    console.log ("duplicate X and Y value")
}else if ((x === z)){

    console.log ("duplicate X and Z value")
}else if ((y === x)){

    console.log ("duplicate y and x value")
}else if ((y === z)){

    console.log ("duplicate y and z value")
}else if ((z === x)){

    console.log ("duplicate z and x value")
}else if ((z === y)){

    console.log ("duplicate z and y value")
} 