<template>
	<div>
		<div class="vea-header-bar">
			<!-- 标题栏组件 -->
			<home-header></home-header>
		</div>
		<div class="vea-side-bar">
			<!-- 侧边栏组件 -->
			<home-side-bar></home-side-bar>
		</div>
		<div class="vea-content-box">
			<!-- 内容组件 -->
			<home-content ref="child"></home-content>
		</div>
	</div>
</template>

<script>
import HomeHeader from "./common/header.vue";
import HomeSideBar from "./common/sidebar.vue";
import HomeContent from "./homeContent";

export default {
	//注册组件
	components: {
		HomeHeader,
		HomeSideBar,
		HomeContent
	},
	//声明数据源
	data() {
		return {};
	},
	methods: {
		openTab(title, url, open_tab) {
			this.$refs.child.openTab(title, url, open_tab);
		}
	}
};
</script>

<style lang="scss" scoped></style>
