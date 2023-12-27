let input = [5,7,1,4,6];
  let N = input.length;
  let K = 2;
  let rotation = () => {
    var output = ''
      K = K % N;
      for (let i=0; i<N; i++){
          if(i<K){
              output = output + input[N + i -K] + ' ';
          } else {
              output = output + input[i - K] + ' ';
          }
      }
      console.log(output)
  }
  rotation();