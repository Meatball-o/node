/**
 * Created by 丸子 on 2018/5/11.
 */
// Node 缓冲区长度计算语法如下所示：
// buf.length;
// 返回 Buffer 对象所占据的内存长度。

var buffer = Buffer.from('www.runoob.com');
//  缓冲区长度
console.log("buffer length: " + buffer.length);
