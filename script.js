// a function that taskes one parameter
function number(param){

    
    let arr = [] 

    // looping, and checking if number passed through is divisible by 2,3,5
    for( let i=1; i <= param;  i++){ 

                if(i % 2 == 0 && i % 3 == 0 ){
                    arr.push('yu-oh');
                }else if(i % 3 == 0 && i % 5== 0){
                    arr.push('gi-oh');
                }else  if(i % 2 === 0){
                    arr.push('yu');

                }else if(i % 3 === 0){
                    arr.push('gi');

                }else if(i % 5 == 0) {
                    arr.push('oh');

                } else{
                    arr.push(i);
                }

            
    };
    return arr;
    
    
};
// calling the function

number(10);

        
