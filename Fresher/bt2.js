var changeChar = ['B', 'M', 'K', ''];
var arrNum = [1000000000, 1000000, 1000,];
var number;
let result="";
let temp;
function changeMoney(number)
{
    for(let i = 0; i < arrNum.length;i++)
    {
        if(number>=1000)
        {
            let a = parseInt(number/arrNum[i]) 
            if(a != 0)
            {
            temp = number/arrNum[i]+'';  
            result = temp.slice(0,4) + changeChar[i];
            break;
            }
        }
        else
        {
            result = number;
        }
        
        
    }
    console.log(result);
}
changeMoney(11234000000);