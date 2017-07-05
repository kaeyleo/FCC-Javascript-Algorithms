/**
 * Truncate a string
 * 如果字符串的长度比指定的参数num长，则把多余的部分用...来表示
 * 插入到字符串尾部的三个点号也会计入字符串的长度
 * 如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度
 */
function truncate(str, num) {
  if(num>3) {
    if(num>=str.length) {
      str = str.slice(0, num);
    }else{
       str = str.slice(0, num-3) + '...';
    }
   }else if(num<=3){
     str = str.slice(0, num) + '...';
   }
  return str;
}

truncate("A-tisket a-tasket A green and yellow basket", 11); // A-tisket...
truncate("AB", 1); // 'A...'