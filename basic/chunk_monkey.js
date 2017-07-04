/** 
 * Chunky Monkey
 * 把一个数组arr按照指定的数组大小size分割成若干个数组块
 * 例如: chunk([1,2,3,4],2)=[[1,2],[3,4]];
 */
function chunk(arr, size) {
    var masterArray = [];
    for(var i = 0; i<arr.length; i+=size) {
        tempArr.push(arr.slice(i, i+size));
    }
    return masterArray;
}

chunk(['a', 'b', 'c', 'd'], 2); // [['a', 'b'], ['c', 'd']]
chunk([0, 1, 2, 3, 4, 5], 4); // [[0, 1, 2, 3], [4, 5]]