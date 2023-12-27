var arr = [1,2,3,4,5,6];
  
  /* arrow function */
  ((data2 = []) => {
     for(var i=0; i<data2.length; i++){
        if(data2[i] % 2 != 0){
            console.log(data2[i])
        }
    }
 })(arr); 