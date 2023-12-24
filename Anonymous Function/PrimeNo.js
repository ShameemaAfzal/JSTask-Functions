var input = [6,23,5,12,9,10]
    var prime = () => {
        for(var i=0; i<input.length; i++){
            if(input[i]>=2){
                var count = 0
                for(var x=1; x<=input[i]; x++){
                    if(input[i]%x == 0){
                        count++
                    }
                }
                if(count == 2){
                    console.log(input[i])
                }
            }
            
        }
   }
   prime();