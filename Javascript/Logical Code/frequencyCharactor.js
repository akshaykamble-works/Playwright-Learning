/*
input="JavaScript";
output:
Character: J Frequency: 1
Character: a Frequency: 2
Character: v Frequency: 1
Character: S Frequency: 1
Character: c Frequency: 1
Character: r Frequency: 1
Character: i Frequency: 1
Character: p Frequency: 1
Character: t Frequency: 1

*/

let input="JavaScript";
let freqMap=new Map();
for(let ch of input)
{
    if(ch!==' ')
    {
    freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
    }
}

for (let [key, value] of freqMap) 
    {
    console.log(`Character: ${key} Frequency: ${value}`);
    }