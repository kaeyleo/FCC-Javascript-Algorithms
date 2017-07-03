/**
 * Reverse a String
 * 翻转字符串
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString('hello'); // 'olleh'