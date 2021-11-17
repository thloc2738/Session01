var strNum = ["Khong ", "Mot ", "Hai ", "Ba ", "Bon ", "Nam ", "Sau ", "Bay ", "Tam ", "Chin "];
var temp = ["Muoi ", "Linh "];
var numb = 123456;
var num = numb % 10000;
let str = String(numb);
let len = str.length;
console.log(len);
var result =  "";
var _result = "";
function firstNum(number)
{
   let a = parseInt(number / 10);
   let b = number % 10;
   if(number == 0)
   {}
   else if(number > 0 && number < 100)
   {
       if(a == 0)
       {
           if(b != 0)
           {
               result = strNum[b] + " Van";
           }
           else{}
       }
       else if(a >  0 && a < 2)
       {
          
           if( b == 5)
           {
               result = temp[0] + temp[2] + " Van";   
           }
           else if(b == 0)
           result = temp[0] + " Van";
           else
           {
               result = temp[0] + " " + strNum[b] + " Van";
           }
       }
       else if(a >= 2)
       {
           if(b == 0)
           {
               result = strNum[a] + " " + temp[0] + " Van";
           }
           else if(b == 5)
           {
               result = strNum[a] + " " + temp[0] + temp[2] + " Van";
           }
           else
           result = strNum[a] + " " + temp[0] + strNum[b] + " Van";
       }
   }
   return result;
   //console.log(result);  
}
function secondNumb(z)
{
   let temp = z%10000;
   for(let i = 3; i >= 0; i--)
   {
       let a = parseInt(temp / Math.pow(10,i));
       let b = parseInt(temp % Math.pow(10,i));
       if(i == 3)
       {
           if(a == 0)
           {
 
           }
           else
           _result +=  strNum[a] + " Ngan ";
       }
       else if(i == 2)
       {
           if(a == 0)
           {

           }
           else
           _result += strNum[a] + " Tram ";
       }
       else if(i == 1)
       {
           if(a == 0)
           {
               _result += " Linh ";
           }
           else if( a == 1)
           {
            _result += " Muoi ";
        }
        else
        {
            _result += strNum[a] + " " + " Muoi ";
        }
    }
    else
    {
        if(a == 5)
        {
            _result += " Lam ";
        }
        else
        {
            _result += strNum[a];
        }
    }
    temp = b;
    //temp = parseInt(b % Math.pow(10,i));
}
return _result;   
//console.log(_result);
}

function addString(numbA)
{
let first = parseInt(numbA/10000);
let second = parseInt(numbA);
var result = firstNum(first) + " " + secondNumb(second);
console.log(result);
}
addString(7);