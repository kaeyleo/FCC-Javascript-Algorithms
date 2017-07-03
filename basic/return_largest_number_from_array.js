/**
 * Return Largest Numbers in Arrays
 * 找出多个数组中的最大数
 * 右边大数组中包含了4个小数组，分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组。
 */
function largestOfFour(arr) {
    var resultArray = [], a, b;

    for(var i=0; i<arr.length; i++) {
        a = b = 0;
        
        for(var j=0; j<arr[i].length; j++) {
            a = arr[i][j];
            if(a>b) {
            b = a;
            }
        }
        resultArray.push(b);
    }
    return resultArray;
}

largestOfFour([ [4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1] ]); // [5, 27, 39, 1001]