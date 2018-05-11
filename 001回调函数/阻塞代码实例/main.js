/**
 * Created by 丸子 on 2018/5/11.
 */
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");