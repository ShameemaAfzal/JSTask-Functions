var input = ["abc","ded","shahs","235","616"]
 var p = () => {
     var temp = ''
     var data = input[i]
         for(var x=data.length-1; x>=0; x--){
             temp = temp + data[x]
         }
         if(temp === data){
             console.log(data)
         }
 }
 for(var i=0; i<input.length; i++){
     p()
 }