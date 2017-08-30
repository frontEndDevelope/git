//var express=require("express");
var http=require("http");
http.createServer(function (request,response){
    //发送http头部
    //http状态值： 200 OK
    //内容类型： text/plain
    response.writeHead(200,{
        "Content-Type": "text-plain",
        "charset": "utf-8"
    });
    //发送响应数据
    var sendData={
    	code: 0,
    	msg: "sucess",
    	data: {
    		name: "何小亖",
    		id: "aa111111",
    	}
    };
    response.end(JSON.stringify(sendData));
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
