var input = [3,6,8,6,1,5,1,8]
   let duplicate = () => {
       for(i=0; i<input.length; i++){
           for(j=i+1; j<input.length; j++){
               if(input[i] == input[j]){
                   var removed = input.splice(j,1);
                   j=j-1
               }
           }
       }
       console.log(input)
   }
   duplicate()