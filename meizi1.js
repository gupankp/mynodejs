

//读网络文件并写本地

var http = require('http');
var fs = require('fs');

var mainUrl = 'http://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/';

for(var i=1; i<39; i++) {

    var link = mainUrl + i;
    download(link, i);
}


function download(url, page) {
    http.get(url, function (response) {
        response.setEncoding('binary');  //二进制binary
        var Data = '';
        response.on('data', function (data) {    //加载到内存
            Data += data;
        }).on('end', function () {          //加载完

            console.log(Data);
            fs.writeFile('/Users/gupankp/workspace/nodejs/gank_json/meizitu_'+page+'.json', Data , function () {
                console.log('ok')
            });
        })
    })
}
