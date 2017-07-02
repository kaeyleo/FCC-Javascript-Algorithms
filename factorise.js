/**
 * Factorialize a Number
 * 计算一个整数的阶乘
 * 如果用字母n来代表一个整数，阶乘代表着所有小于或等于n的整数的乘积。
 * 阶乘通常简写成 n!
 * 例如: 5! = 1 * 2 * 3 * 4 * 5 = 120
 */
function factorialize(num) {
    return num <= 1 
        ? 1 
        : num * factorialize(num-1);
}

factorialize(5); // 120