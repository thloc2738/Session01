var number = 120;
let result = 1;
function factorials(num)
{
    for(let i = num; i > 0; i--)
    {
        result = result * i;
    }
    return result;
}
let a = factorials(number);
console.log(a);
