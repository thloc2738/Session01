var numBer = [ "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

function getElement()
{
    number = Math.floor(Math.random() * 10);
    for(let i = 0; i < numBer.length; i++)
    {
        if(i == number)
        {
            return numBer[i];
        }
    }
}
var a = 2;
var b = "";
b = getElement();
console.log(b);