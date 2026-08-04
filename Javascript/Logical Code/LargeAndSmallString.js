/*
input: i love javascript
output: min string: i max string: javascript

*/

let input="i love javascript";
let min=0;
let max=0;
let words=input.split(" ");
for(let i=0;i<words.length;i++)
{
    if(words[i].length<words[min].length)
    {
        min=i;
    }
    if(words[i].length>words[max].length)
    {
        max=i;
    }
}
console.log("Min string: " + words[min]);
console.log("Max string: " + words[max]);