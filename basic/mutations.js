/**
 * Mutations
 * 如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true
 * 举例，["hello", "Hello"]应该返回true，因为在忽略大小写的情况下，第二个字符串的所有字符都可以在第一个字符串找到
 * ["hello", "hey"]应该返回false，因为字符串"hello"并不包含字符"y"
 * ["Alien", "line"]应该返回true，因为"line"中所有字符都可以在"Alien"找到
 */
function mutation(arr) {
    var str1 = arr[0].toLowerCase(),
        str2 = arr[1].toLowerCase();

    for(var i = 0; i < str2.length; i++) {
        var flag = str1.indexOf(str2[i]);
        if(flag === -1) {
            return false;
        } 
    }

    return true;
}

mutation(["hello", "Hello"]); // true
mutation(["hello", "hey"]); // false
mutation(['Mary', 'Army']); // true