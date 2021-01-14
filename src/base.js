exports.install = function (Vue, options) {
    Vue.prototype.Version = function () {
        /**
         * 版本号约定：
         * v1.a.b
         * a：单数为先行版，双数为正式发布版
         * b：先行版和正式发布版的小版本号
         */
        return "v1.1.1";
    };
};