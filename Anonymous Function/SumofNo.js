var number = [1,3,6,4,9]
  let x = () => {
      let temp = 0
      for(var i=0; i<number.length; i++){
          temp = number[i] + temp
      }
      console.log(temp)
  }
  x();