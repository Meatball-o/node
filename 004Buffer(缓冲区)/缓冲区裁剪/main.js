/**
 * Created by 丸子 on 2018/5/11.
 */
// Node 缓冲区裁剪语法如下所示：
// buf.slice([start[, end]])
// otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。
// start - 数字, 可选, 默认: 0
// end - 数字, 可选, 默认: buffer.length
// 返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。

var buffer1 = Buffer.from('runoob');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());
