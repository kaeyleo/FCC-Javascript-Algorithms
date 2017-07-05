/**
 * Repeat a string repeat a string 
 * 重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串。
 */
function repeat(str, num) {
    var s = '';
    
    if(num>0) {
        for(var i = 0; i<num; i++) {
            s += str;
        }
    }
    return s;
}

repeat("abc", 3); // 'abcabcabc'
repeat("*", 8); // '********'