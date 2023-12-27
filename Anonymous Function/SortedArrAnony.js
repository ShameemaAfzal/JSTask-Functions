let arr1 = [ 1, 6, 15, 23, 10 ];
    let arr2 = [ 2, 5, 9, 12, 7 ];
    let n1 = 5;
    let n2 = 5;
    
    let Median = () => {
    let j = 0;
    let i = n1 - 1;
    while (arr1[i] > arr2[j] && j < n1 && i > -1)
    {
        let temp = arr1[i];
        arr1[i] = arr2[j];
        arr2[j] = temp;
        i--; j++;
    }
    arr1.sort(function(a, b){return a - b});
    arr2.sort(function(a, b){return a - b});
    return parseInt((arr1[n1 - 1] + arr2[0]) / 2, 10);
    }
    
    if (n1 == n2){
        console.log(Median());
    }else{
        console.log("Array is unequal");
    }
    