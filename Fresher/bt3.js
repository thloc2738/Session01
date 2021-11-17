var stringArr = " OPeTwoThreeFourFiveSixSevenEight";
function isUpper(stringA)
{
    var dem;
    if((stringA[0].charCodeAt(0) >= 65 && stringA[0].charCodeAt(0) <= 90)||(stringA[0].charCodeAt(0)>= 97 && stringA[0].charCodeAt(0)<= 122))
        {
            dem = 1;
        }
        else 
        {
            dem = 0;
        }
    for(let i = 1; i < stringA.length;i++)
    {
        let a = stringA[i].charCodeAt(0);
        if(a>= 65 && a <= 90 || a == 32)
        {
            dem++;
        }
    }
    return dem;
}
let a = isUpper(stringArr);
console.log(a);