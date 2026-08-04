/*

MissingElementArray
let arr = [1, 2, 3, 4,5, 7];
output: Missing element: 6

*/
let arr = [1, 2, 3, 4,5, 7];
let n=arr.length + 1;//length of array + 1 because one element is missing

for(let i=0;i<n-1;i++)

    {
        if(arr[i+1]-arr[i] != 1)//check if the difference between two consecutive elements is not equal to 1
        {
            console.log("Missing element: " + (arr[i] + 1));
            break;
        }   

    }