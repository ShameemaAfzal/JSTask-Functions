var input = 'good morning to all'
    const caps = (() => {
    input = input.split(' ')
        for(var i=0; i<input.length; i++){
                input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
        }
        return input.join(' ')
    })(input);
    console.log(caps)