function marks(num){
    let i,min=num[0];
for( i =0 ; i<num.length ; i++)
{
   
    if(min>=num[i])
    {
        min = num[i];
    }
}
return min;
}

const final = marks([12,33,99,55,2]);

console.log('The Final Max NUmber is =',final);