
function crearArray(arr) {
    var index = -1,
        arr_length = arr ? arr.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = arr[index];

        if (value) {
            result[++resIndex] = value;
        }
    }
    return result;
}

export default crearArray;