<template>
	<div class="veadmin-header-container">
		<a class="veadmin-header-logo" href="/aboutHui.shtml">ve-admin</a>
		<span class="veadmin-header-version">{{ this.Version() }}</span>
		<div class="veadmin-header-datetime">
			<span style="color:#fff;margin-left: 14px;">当前时间：{{ getTime(date) }}</span>
			<span style="font-size: x-small;;color:#cccccc;margin-left: 4px;">{{ getCustomDate(date) }}</span>
		</div>
		<div class="veadmin-header-menu">
			<ul>
				<li><span style="padding-left:10px;">你好！</span></li>
				<li v-for="(item, count) in headerData" :key="count.toString()" @click="openTab(item.label, item.url, item.open_tab)">
					<i :class="item.icon"></i>
					<span>{{ item.label }}</span>
				</li>
				<li @click="openTab('信息中心', '/admin/message_list', true)">
					<i class="el-icon-message"></i>
					<span>信息中心</span>
				</li>
				<li onclick="">
					<i class="el-icon-switch-button"></i>
					<span>退出</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { GetTime, GetCustomDate } from "@/assets/ve-admin/TimeUtils.js";
export default {
	data() {
		return {
			date: new Date(),
			headerData: [
				{
					label: "小明",
					url: "/admin/user_info",
					icon: "el-icon-user-solid",
					open_tab: false
				},
				{
					label: "操作日志",
					url: "/admin/operation_log",
					icon: "el-icon-thumb",
					open_tab: true
				}
			]
		};
	},
	methods: {
		getTime(date) {
			return GetTime(date);
		},
		getCustomDate(date) {
			return GetCustomDate(date);
		},
		openTab(label, url, open_tab) {
			this.$parent.openTab(label, url, open_tab);
		}
	},
	mounted() {
		//更新时间
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
