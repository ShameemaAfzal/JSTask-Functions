let input = [5,7,1,4,6];
  let N = input.length;
  let K = 2;
  ((data, n, k) => {
    var output = ''
      k = k % n;
      for (let i=0; i<n; i++){
          if(i<k){
              output = output + input[n + i -k] + ' ';
          } else {
              output = output + input[i - k] + ' ';
          }
      }
      console.log(output)
  })(input, N, K);