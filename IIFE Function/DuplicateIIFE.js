var input = [3,6,8,6,1,5,1,8]
   let duplicate = ((data) => {
        for(i=0; i<data.length; i++){
           for(j=i+1; j<data.length; j++){
               if(data[i] == data[j]){
                   var removed = data.splice(j,1);
                   j=j-1
               }
           }
       }
       return data
   })(input)
   console.log(duplicate)