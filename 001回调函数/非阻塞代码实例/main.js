/**
 * Created by 丸子 on 2018/5/11.
 */
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});

console.log("程序执行结束!");