<template>
	<div>
		<span style="font-size:medium;padding:0px 6px 0px 10px;">当前时间：{{ date | formatTime }}</span>
		<span style="color:#cccccc;font-size:smaller">{{ date | formatDate }}</span>
	</div>
</template>

<script>
//在月份、日期、小时等小于10前面补0
var padDate = function(value) {
	return value < 10 ? "0" + value : value;
};
var weeks = ["日", "一", "二", "三", "四", "五", "六"];
export default {
	data() {
		return {
			date: new Date()
		};
	},
	filters: {
		formatTime: function(value) {
			var date = new Date(value);
			return padDate(date.getHours()) + ":" + padDate(date.getMinutes()) + ":" + padDate(date.getSeconds());
		},
		formatDate: function(value) {
			var date = new Date(value);
			return (
				date.getFullYear() +
				"年" +
				padDate(date.getMonth() + 1) +
				"月" +
				padDate(date.getDate()) +
				"日" +
				"（星期" +
				weeks[date.getDay()] +
				"）"
			);
		}
	},
	mounted() {
		let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
		this.timer = setInterval(() => {
			_this.date = new Date(); // 修改数据date
		}, 1000);
	},
	beforeDestroy() {
		if (this.timer) {
			clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
		}
	}
};
</script>

<style lang="scss" scoped></style>
