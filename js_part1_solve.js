//  Task 02

function rpt(arr)
{
let count = 0;

for(let i =0;i<arr.length;i++)
{
     if(arr[i] === target){
        count++;
     }
}
return count;

}
const target =25;
const final = rpt( [5,6,11,12,98, 5]);



console.log(final);

