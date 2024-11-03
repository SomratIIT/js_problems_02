const mobiles = [
    { model: 'Realme', price: '28000', camera: '48px' },
    { model: 'htc', price: '38000', camera: '58px' },
    { model: 'samsung', price: '48000', camera: '50px' }
];

function result(mobiles) {
    let max = mobiles[0]; // Initialize max with the first object

    for (let i = 1; i < mobiles.length; i++) {  // Start from index 1
        // Convert price to a number before comparing
        if (Number(mobiles[i].price) > Number(max.price)) {
            max = mobiles[i];
        }
    }

    return max;
}

const final = result(mobiles);

console.log(final);
