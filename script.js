let n= prompt("Enter a number:");
let arr= [];

for (let i=1; i<=n; i++)
{
     arr[i-1]= i;
}
console.log (arr);

let output= arr.reduce((pre,cur)=> {
     return pre + cur;
});
console.log(output);