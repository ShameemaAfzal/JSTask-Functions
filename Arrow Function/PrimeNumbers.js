var input = [6,23,5,12,9,10]
    var prime = (data) => {
        for(var i=0; i<data.length; i++){
            if(data[i]>=2){
                var count = 0
                for(var x=1; x<=data[i]; x++){
                    if(data[i]%x == 0){
                        count++
                    }
                }
                if(count == 2){
                    console.log(data[i])
                }
            }
            
        }
   }
   prime(input);