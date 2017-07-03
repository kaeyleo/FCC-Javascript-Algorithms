/**
 * Falsy Bouncer
 * 删除数组中的所有假值
 * 在JavaScript中，假值有false、null、0、""、undefined 和 NaN
 */
function bouncer(arr) { 
    return arr.filter(function(item) {
        return item;
    }); 
}

bouncer([7, 'ate', '', false, 9]); // [7, 'ate', 9]
bouncer(['a', 'b', 'c']); // ['a', 'b', 'c']
bouncer([1, null, NaN, 2, undefined]); // [1, 2]