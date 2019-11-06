//老刘出品，嘎嘎嘎
//@为界限字符串中取出相应字段
//参数string为要被截取字段的字符串
//参数name是你要获得字段的属性名
function getString(string,name) {
    var reg = new RegExp("(^|@)" + name + "=([^@]*)(@|$)", "i");
    var r = string.match(reg); 
    if (r != null){
        return r[2];
    }else{
        return null;
    }
}


//获取url参数-封装函数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); 
    if (r != null){
        return r[2];
    }else{
        return null;
    }
}