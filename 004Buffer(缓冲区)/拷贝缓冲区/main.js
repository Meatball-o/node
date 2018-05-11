/**
 * Created by 丸子 on 2018/5/11.
 */
// Node 缓冲区拷贝语法如下所示：
// buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
// otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。
// targetBuffer - 要拷贝的 Buffer 对象。
//
// targetStart - 数字, 可选, 默认: 0
//
// sourceStart - 数字, 可选, 默认: 0
//
// sourceEnd - 数字, 可选, 默认: buffer.length
// 没有返回值。

var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('RUNOOB');

//将 buf2 插入到 buf1 指定位置上
buf2.copy(buf1, 2);

console.log(buf1.toString());