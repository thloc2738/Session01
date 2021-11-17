let arr = [7,2,6,5,3,5,3];
let brr = [7,2,4,5,3,2,4,8,1];
let result="";

function missArr(ar,br)
{
    let a = ar.length;
    let b = br.length;
    for(let i = 0; i < a; i++)
    {
        let count = 0;
        for(let j = 0; j < b; j++)
        {
            if(ar[i] == br[i])
            {
                count++;
            }
        }
        if(count == 0)
        {
            result += ar[i];
        }
    }
    console.log(result);
}
let c = missArr(arr,brr);


