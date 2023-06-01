const loopFn = ():never => {
    while(1){
        console.log('suc~~');
    }
    throw new Error('loop function is stopped!');
}