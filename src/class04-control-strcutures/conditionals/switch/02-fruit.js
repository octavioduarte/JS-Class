/*
    Create a variable called “fruit”. 
    This variable must receive a string with the name of a fruit.
    Afterwards, create a conditional switch structure that receives
    this variable and that has three cases: if apple, 
    return in the console: “We do not sell this fruit here”. In the case of kiwi fruit,
    return: “We are short of kiwi fruit” and in the case of watermelon,
    return: “Here it is, it's 3 reais a kilo”. Test with these three options
    and check your browser console. Also create a default, which will return
    an error message to the console.
*/

var fruit = "watermelon"

switch (fruit){
    case "apple":
    console.log ("We do not sell this fruit here")
    break;
    
    case "kiwi":
    console.log ("We are short of kiwi")
    break;

    case "watermelon":
    console.log ("Here it is R$ 3.00 per kilo")
    break;

default:
    console.log ("Sorry we don't have this fruit or we don't recognize it, so please contact us on number (xxx) for more information")

}