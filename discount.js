 function discount(quantity){
price=0;
    if(quantity <=100)
    {
        price = quantity * 100 ;
    }
    else if(quantity >=101 && quantity <=200)
        {
            price = quantity * 90 ;
        }
       else if(quantity >200)
            {
                price = quantity * 70 ;
            }
    return price;
 }

 let result = discount(101);

 console.log('The Total Price is =',result);