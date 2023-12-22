var input = 'good morning to all'
    const titleCaps = (data1) => {
    data1 =data1.split(' ')
        for(var i=0; i<data1.length; i++){
                data1[i] = data1[i].charAt(0).toUpperCase() + data1[i].slice(1);
        }
        console.log(data1.join(' '))
    }
    titleCaps(input);