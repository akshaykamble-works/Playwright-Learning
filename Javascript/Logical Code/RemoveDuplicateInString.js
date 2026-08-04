/*
// input= HELLO
// Output=HELO
*/
let name='HELLO';
let result='';
for(let i=0;i<name.length;i++)
{
    if(result.indexOf(name[i])===-1)
    {
        result+=name[i];
    }
}
console.log(result);

console.log('-------------------');
// second way

let str = "HELLO";
let resultOutput = "";

for (let ch of str) {
    if (!resultOutput.includes(ch)) {
        resultOutput += ch;
    }
}

console.log(resultOutput);