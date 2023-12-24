var number = [1,3,6,4,9]
  const sum = (input) => {
      let temp = 0
      for(var i=0; i<input.length; i++){
          temp = input[i] + temp
      }
      console.log(temp)
  }
  sum(number);