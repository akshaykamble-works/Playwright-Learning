/*
Input ---> Hello123@#2025!WORLD
Output->
Total letters --> 10
Totoal upper case --> 6
Total lower case --> 4
Total special Characters. --> 3
Total numbers --> 7
*/
let input="Hello123@#2025!WORLD";
let totaLetters=0;
let totalUpperCase=0;
let totalLowerCase=0;
let totalSpecialCharacters=0;
let totalNumbers=0;
let totalCharacters=0;
for(let i=0;i<input.length;i++)
{
    let ch =input[i];
    if(ch>='A' && ch<='Z')
    {
        totalUpperCase++;
        totaLetters++;
    }
    else if(ch>='a' && ch<='z')
    {
        totalLowerCase++;
        totaLetters++;
    }
    else if(ch>='0' && ch<='9')
    {
        totalNumbers++;
    }
    else
    {
        totalSpecialCharacters++;
    }
}
totalCharacters=totalUpperCase+totalLowerCase+totalNumbers+totalSpecialCharacters;
console.log("Total characters --> " + totalCharacters);
console.log("Total letters --> " + totaLetters);
console.log("Total upper case --> " + totalUpperCase);
console.log("Total lower case --> " + totalLowerCase);
console.log("Total special characters --> " + totalSpecialCharacters);
console.log("Total numbers --> " + totalNumbers);