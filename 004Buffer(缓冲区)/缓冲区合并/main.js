/**
 * Created by 丸子 on 2018/5/11.
 */
// Node 缓冲区合并的语法如下所示：
// Buffer.concat(list[, totalLength])
// list - 用于合并的 Buffer 对象数组列表。
// totalLength - 指定合并后Buffer对象的总长度。
var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());