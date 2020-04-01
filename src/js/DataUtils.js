import $ from "jquery";

let url = "http://127.0.0.1:8081";
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
            console.log(id);
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
}