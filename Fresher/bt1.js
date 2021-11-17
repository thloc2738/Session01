var number = 110011111.1101;
function splitNumber(string)
{
    let count = 0;
    let a = "";
    for(let i = 0; i < string.length-1;i++)
    {
        a = a + string[i];
        if(string[i+1]=='.')
        {
            break;
        } 
    }
    return a;
}
function behindNumb(string)
{
    let a = "";
    for(let i = string.length-1; i>=0;i--)
    {
        a = string[i] + a;
        if(string[i]=='.')
        {
            break;
        }
    }
    return a;
}
function formatNumber(string)
{
    let str = "";
    let dem = 0;
    for(let i = string.length-1; i>=0;i--)
    {
        dem++;
        str = string[i] + str;
        if(dem == 3 && i != 0)
        {
            str = ',' + str;
            dem = 0;
        }
        
    }
    return str;
}
let a = number.toString();
let result = formatNumber(splitNumber(a)) + behindNumb(a);
console.log(result);