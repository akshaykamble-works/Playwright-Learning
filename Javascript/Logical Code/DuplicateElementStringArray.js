/*
Dupplicate Element String Array
*/

let arr=['apple','banana','orange','apple','grape','banana'];
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
        {
            console.log(arr[i]);
        }
    }
}