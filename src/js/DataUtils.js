import $ from "jquery";

let url = "http://39.100.94.227:8081";//"http://127.0.0.1:8081";
export default {
    // 获取和德咨询摘要
    getNewsBrief: function () {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${url}/getNewsBrief`,
                type: "GET",
                async: true,
                dataType: "JSON",
                error: function (msg) {
                    console.log('读取咨询摘要失败！');
                    resolve(null);
                },
                success: function (result) {
                    resolve(result);
                }
            });
        });
    },
    // 获取和德咨询详情
    getNewsDetail: function (id) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${url}/getNewsDetail`,
                type: "POST",
                async: true,
                dataType: "JSON",
                data: { id: id },
                error: function (msg) {
                    console.log('读取咨询详情失败！');
                    resolve(null);
                },
                success: function (result) {
                    resolve(result);
                }
            });
        });
    },
    // 获取和德咨询摘要
    getRecruit: function () {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${url}/getRecruit`,
                type: "GET",
                async: true,
                dataType: "JSON",
                error: function (msg) {
                    console.log('读取招聘信息失败！');
                    resolve(null);
                },
                success: function (result) {
                    resolve(result);
                }
            });
        });
    },
    // 获取访问总数
    getVisitCount: function () {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${url}/getVisitCount`,
                type: "GET",
                async: true,
                dataType: "JSON",
                error: function (msg) {
                    console.log('获取访问总数失败！');
                    resolve(null);
                },
                success: function (result) {
                    resolve(result);
                }
            });
        });
    },
    // 写入访问记录
    setVisitRecord: function () {
        // 判断时差
        var key = 'hdLastVisit', valid = true;
        var lastTime = localStorage.getItem(key);// 上次时间
        var thisTime = new Date();
        if (lastTime) {
            lastTime = new Date(lastTime);
            if (thisTime - lastTime < 10 * 60 * 1000) {// 10分钟内不重复记录
                valid = false;
            }
        }
        if (valid) {
            localStorage.setItem(key, thisTime);
        } else {
            return;
        }
        // 写入记录
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${url}/setVisitRecord`,
                type: "POST",
                async: true,
                dataType: "JSON",
                data: returnCitySN,
            });
        });
    }
}