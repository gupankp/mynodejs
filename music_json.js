

//读网络文件并写本地

var http = require('http');
var fs = require('fs');

var mainUrl = 'http://vip328.b0.upaiyun.com/getjson/getMusicList.json';

http.get(mainUrl, function (response) {
    response.setEncoding('binary');  //二进制binary
    var Data = '';
    response.on('data', function (data) {    //加载到内存
        Data += data;
    }).on('end', function () {          //加载完

        console.log(Data);
        fs.writeFile('/Users/gupankp/workspace/nodejs/gank_json/getMusicList.json', Data , function () {
            console.log('ok')
        });
    })
});
