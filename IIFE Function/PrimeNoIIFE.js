var input = [6,23,5,12,9,10]
    let prime = ((data) => {
        var output = ''
        for(var i=0; i<data.length; i++){
            if(data[i]>=2){
                var count = 0
                for(var x=1; x<=data[i]; x++){
                    if(data[i] % x == 0){
                        count++
                    }
                }
                if(count == 2){
                    output =  output + data[i] + ' '
                }
            }
        }
        return output
   })(input)
   console.log(prime)
   