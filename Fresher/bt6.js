let a = 12;
let b = 1;
function getNumber(a,b)
{
    let result = "";
    if(a < b)
    {
        for(let i = a +1; i < b; i++)
        {
            result = result + " " + i + " ";
        }
    }
    
    else if(a > b)
    {
        for(let i = b + 1; i < a; i++)
        {
            result = result + " " + i + " ";
        }
    }
    else
    {
        console.log("Khong co gia tri!");
    }
    return result;
}
let s = getNumber(a, b);
console.log(s);