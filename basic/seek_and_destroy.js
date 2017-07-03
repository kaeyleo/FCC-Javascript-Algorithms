/**
 * Seek and Destroy
 * 实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值
 */
function destroyer(arr) {
    var valuesToRemove = [];

    for(var i = 1; i < arguments.length; i++) {     
        valuesToRemove.push(arguments[i]);
    }

    arr = arr.filter(function(val) {
        return (valuesToRemove.indexOf(val) === -1);
    });

    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // [1]