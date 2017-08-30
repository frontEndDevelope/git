//文件读取
console.log("阻塞--同步读取文件开始");
var fs=require("fs");
var data=fs.readFileSync("files/input.txt");
console.log("文件内容---------------"+data.toString());
console.log("阻塞--同步读取文件结束");
console.log("非阻塞--异步读取文件开始");
fs.readFile('files/input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log("文件内容---------------"+data.toString());
    console.log("非阻塞--异步读取文件结束");
});
console.log("程序执行结束");