export {
    GetTime,
    GetDate,
    GetDateTime,
    GetCustomDate
}

/**
 * 获取[时:分:秒]
 * return 00:00:00 格式的时间
 * @param Date
 */
let GetTime = (date) => {
    return padZero(date.getHours()) + ":" + padZero(date.getMinutes()) + ":" + padZero(date.getSeconds());
}

/**
 * 获取[年-月-日]
 * return 2020-01-01 格式的时间
 * @param Date
 */
let GetDate = (date) => {
    return (
        date.getFullYear() +
        "-" +
        padZero(date.getMonth() + 1) +
        "-" +
        padZero(date.getDate())
    );
}

/**
 * 获取[年-月-日 时:分:秒]
 * return 2020-01-01 00:00:00 格式的时间
 * @param Date
 */
let GetDateTime = (date) => {
    return (
        date.getFullYear() + "-" + padZero(date.getMonth() + 1) + "-" + padZero(date.getDate()) +
        " " +
        padZero(date.getHours()) + ":" + padZero(date.getMinutes()) + ":" + padZero(date.getSeconds())
    );
}

/**
 * 获取[年月日（星期几）]
 * return 2020年1月1日（星期一） 格式的时间
 * @param Date
 */
let GetCustomDate = (date) => {
    return (
        date.getFullYear() + "年" + padZero(date.getMonth() + 1) + "月" + padZero(date.getDate()) + "日" + "（星期" + weeks[date.getDay()] + "）"
    );
}


/**
 * 功能：小于10则在前面补0
 * return 01 格式的数据
 * @param 数值 
 */
let padZero = function (num) {
    return num < 10 ? "0" + num : num;
};

/**
 * 星期几的数组
 */
let weeks = ["日", "一", "二", "三", "四", "五", "六"];