const mobiles = [
    { model: 'Realme',
         price: '28000', 
         camera: '48px' 
        },
    { model: 'htc', price: '38000', camera: '58px' },
    { model: 'samsung', price: '48000', camera: '50px' }
];

function result(mobiles) {  // Naming it "mobiles" to indicate it's an array

    let i,max=mobiles[0];
for( i =0 ; i<mobiles.length ; i++)
{
   
    if(max.price >=mobiles.price)
    {
        max = mobiles[i];
    }
}
return max;
}

const final = result(mobiles);

console.log(final);
