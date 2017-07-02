/**
 * Find the Longest Word in a String 
 * 在句子中找出最长的单词，并返回它的长度。
 */
function findLongestWord(str) {
      /* 将名为str的传入值 "May the force be with you"
      *  转换为数组 ["May", "the", "force", "be", "with", "you"]
      */
      var array = str.split(' '),
      // 创建一个值用于保存字符串的最长长度
          longest = 0;

      // 遍历数组array，并将符合条件的值赋值给longest
      for(var i=0; i<array.length; i++) {
        if(array[i].length>longest) {
          longest = array[i].length;
        }
      }

      // 返回最长词的长度
      return longest;
}

findLongestWord('The quick brown fox jumped over the lazy dog'); // 6
findLongestWord('What is the average airspeed velocity of an unladen swallow'); // 8
