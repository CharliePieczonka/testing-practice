function analyzeArray(array) {
    let obj = {}
    let sum = array.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
    obj.length = array.length;
    obj.average = Math.round(sum / obj.length);

    obj.max = array [0]
    obj.min = array[0]
    array.forEach((num) => {
        if(num > obj.max) {
            obj.max = num;
        }

        if(num < obj.min) {
            obj.min = num;
        }
    });

    return obj;
}

export { analyzeArray }