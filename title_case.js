/**
 * Title Case a Sentence
 * 确保字符串的每个单词首字母都大写，其余部分小写。
 */

function titleCase(str) {
    str = str.toLowerCase().split('');
    str[0] = str[0].toUpperCase();

    for(var i = 0; i<str.length; i++) {
        if(str[i]===' ') {
            str[i+1] = str[i+1].toUpperCase();
        }
    }
    str = str.join('');

    return str;
}

titleCase("I'm a little tea pot"); // 'I'm A Little Tea Pot'
titleCase("sHoRt AnD sToUt"); // 'Short And Stout'