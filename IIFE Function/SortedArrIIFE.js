let arr1 = [ 1, 6, 15, 23, 10 ];
    let arr2 = [ 2, 5, 9, 12, 7 ];
    let n1 = 5;
    let n2 = 5;
    if (n1 == n2){   
    let Median = ((data1, data2, N) => {
    let j = 0;
    let i = N - 1;
    while (data1[i] > data2[j] && j < N && i > -1)
    {
        let temp = data1[i];
        data1[i] = data2[j];
        data2[j] = temp;
        i--; j++;
    }
    data1.sort(function(a, b){return a - b});
    data2.sort(function(a, b){return a - b});
    return parseInt((data1[n1 - 1] + data2[0]) / 2, 10);
    })(arr1, arr2, n1)
    console.log(Median)
    }else{
        console.log("Array is unequal");
    }
    