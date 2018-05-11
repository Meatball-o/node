/**
 * Created by 丸子 on 2018/5/11.
 */
// Node Buffer 比较的函数语法如下所示, 该方法在 Node.js v0.12.2 版本引入：
// buf.compare(otherBuffer);
// otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。
// 返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。

var buffer1 = Buffer.from('ABC');
var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
  console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
  console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
  console.log(buffer1 + " 在 " + buffer2 + "之后");
}