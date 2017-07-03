/**
 * Caesars Cipher
 * 凯撒密码，又叫移位密码
 * 移位密码也就是密码中的字母会按照指定的数量来做移位
 * 一个常见的案例就是ROT13密码，字母会移位13个位置。由'A' ↔ 'N', 'B' ↔ 'O'，以此类推
 * 写一个ROT13函数，实现输入加密字符串，输出解密字符串
 * 所有的字母都是大写，不要转化任何非字母形式的字符(例如：空格，标点符号)，遇到这些特殊字符，跳过它们
 */
function rot13(str) {
    str = str.toUpperCase();

    return str.replace(/[A-Z]/g, function(s) {
        s = s.charCodeAt(0);

        if (s > 77) {
            s -= 13;
        } else {
            s += 13;
        }
        
        return String.fromCharCode(s);
    });
}

rot13('SERR PBQR PNZC'); // 'FREE CODE CAMP'
rot13('SERR CVMMN!'); // 'FREE PIZZA!'
rot13('SERR YBIR?'); // 'FREE LOVE?'