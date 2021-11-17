let s = "Sound.mp3";
let b = "";


function countChar(string, charC)
{
    for(let i = 0; i < string.length; i++)
    {
        if(string[i] == charC)
        {
            return i;
        }
    }
}
function splitTail(stringA)
{
    let i = countChar(stringA,'.') + 1;
    let result = "";
    for(i; i < stringA.length;i++)
    {
        result += stringA[i];
    }
    return result;
}
b = splitTail(s);
console.log(b);