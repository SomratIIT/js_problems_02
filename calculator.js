

function add(x,y){
 return x + y;
}
function sub(x,y){
 return x - y;
}
function mux(x,y){
 return x * y;
}
function div(x,y){
 return x / y;
}
function sqrt1(X){
return Math.sqrt(X);
}

function calculator(x,y,operation){
    if(operation=='add')
    {
        const result = add(x,y);
        return result;
    }
   else if(operation=='sub')
    {
        const result = sub(x,y);
        return result;
    }
  else  if(operation=='mux')
    {
        const result = mux(x,y);
        return result;
    }
  else  if(operation=='div')
    {
        const result = div(x,y);
        return result;
    }
    
}
function new1(X,operation1)
{
    if(operation1 =='sqrt1')
        {
            const result = sqrt1(X);
            return result;
        }
}

const final = calculator(25,50,'add');

console.log(final);
const final1= new1(25,'sqrt1');

console.log(final1);