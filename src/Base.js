exports.install = function (Vue, options) {
    Vue.prototype.Version = function () {
        /**
         * 版本号约定：
         * va.b.c.d
         * a: 独立版本，a版本号不同则有可能不向前兼容
         * b: 第n个阶段
         * c：单数为先行版，双数为正式发布版
         * d：先行版和正式发布版的小版本号
         */
        return "v1.1.2.1";
    };
};