/*
input=[1,2,3,2,4,5,3];
output=[2,3]
*/
let input=[1,2,3,2,4,5,3];
for(let i=0;i<input.length;i++)
{
    for(let j=i+1;j<input.length;j++)
    {
        if(input[i]==input[j])
        {
            console.log("Duplicate elements:"+input[i]);
        }
    }
}    

