/**
 * Created by 丸子 on 2018/5/11.
 */
// 将 Node Buffer 转换为 JSON 对象的函数语法格式如下：
// buf.toJSON()
// 当字符串化一个 Buffer 实例时，JSON.stringify() 会隐式地调用该 toJSON()。

const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ?
    Buffer.from(value.data) :
    value;
});

// 输出: <Buffer 01 02 03 04 05>
console.log(copy);