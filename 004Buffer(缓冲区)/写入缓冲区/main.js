/**
 * Created by 丸子 on 2018/5/11.
 */
// 写入 Node 缓冲区的语法如下所示：
// buf.write(string[, offset[, length]][, encoding])
// string - 写入缓冲区的字符串。
// offset - 缓冲区开始写入的索引值，默认为 0 。
// length - 写入的字节数，默认为 buffer.length
// encoding - 使用的编码。默认为 'utf8' 。
const buf = Buffer.alloc(256);
len = buf.write("www.runoob.com");
console.log("写入字节数 : "+  len);