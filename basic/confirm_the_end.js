/**
 * Confirm the Ending 
 * 检查字符串结尾
 * 判断一个字符串(str)是否以指定的字符串(target)结尾。
 * 如果是，返回true;如果不是，返回false。
 */
function confirmEnding(str, target) {
    str = str.slice(str.length-target.length);

    if(str==target) {
        str = true; 
    }else{
        str = false;
    }

    return str;
}

confirmEnding('Bastian', 'n'); // true
confirmEnding('He has to give me a new name', 'me'); // true.