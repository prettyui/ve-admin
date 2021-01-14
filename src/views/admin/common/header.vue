<template>
	<div class="vea-header-bar-container">
		<a class="vea-header-bar-logo" href="/aboutHui.shtml">ve-admin</a>
		<span class="vea-header-bar-version">v1.0</span>
		<div class="vea-header-bar-version">
			<date-time></date-time>
		</div>
		<div class="vea-header-bar-right-menu">
			<ul>
				<li><span>你好！</span></li>
				<li v-for="(item, count) in headerData" :key="count.toString()" @click="openInTab(item.content, item.url, item.open_in_tab)">
					<a>
						<i :class="'el-icon-' + item.icon"></i>
						<span>{{ item.content }}</span>
					</a>
				</li>
				<li @click="openInTab('信息中心', '../#/admin/message_management/message_list', true)">
					<a>
						<i class="el-icon-message"></i>
						<span>信息中心</span>
					</a>
				</li>
				<li onclick="">
					<a>
						<i class="el-icon-switch-button"></i>
						<span>退出</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import DateTime from "../dateTime.vue";
export default {
	components: { DateTime },
	data() {
		return {};
	},
	methods: {
		openInTab(title, url, open_tab) {
			this.$parent.openTab(title, url, open_tab);
		}
	},
	//获取父组件传递过来的值
	props: {
		headerData: {
			type: Array,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped></style>
