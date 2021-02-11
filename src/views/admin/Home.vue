<template>
	<div>
		<div class="veadmin-header">
			<!-- 标题栏组件 -->
			<home-header></home-header>
		</div>
		<div class="veadmin-sidebar">
			<!-- 侧边栏组件 -->
			<home-sidebar></home-sidebar>
		</div>
		<div class="veadmin-content">
			<!-- 主要内容 -->
			<div class="veadmin-content-header" :style="TabBackground">
				<div class="veadmin-content-tab">
					<ul>
						<li class="active" :style="TabBackground" @click="clickTab()">
							<span>我的桌面</span>
							<em :style="TabBackground"></em>
						</li>
					</ul>
				</div>
				<el-button class="veadmin-content-button-close-all" type="warning" size="mini" @click="closeAllTab()">
					<i class="el-icon-caret-left"></i>
					<i class="el-icon-circle-close"></i>
					关闭全部
				</el-button>
			</div>
			<div class="veadmin-content-iframe-box">
				<iframe frameborder="0" src="/admin/welcome"></iframe>
			</div>
		</div>
	</div>
</template>

<script>
import HomeHeader from "./common/Header";
import HomeSidebar from "./common/Sidebar";
import TabBackground from "@/assets/ve-admin/images/tabBackground.png";
import TabBackgroundClose from "@/assets/ve-admin/images/tabBackground-close.png";
import { ClickTab, OpenTab, CloseAllTabs } from "@/assets/ve-admin/ve-admin.js";
export default {
	//注册组件
	components: {
		HomeHeader,
		HomeSidebar
	},
	//声明数据源
	data() {
		return {
			TabBackground: "background-image: url(" + TabBackground + ")",
			TabBackgroundClose: "background-image: url(" + TabBackgroundClose + ")"
		};
	},
	methods: {
		clickTab() {
			ClickTab();
		},
		openTab(title, url, open_tab) {
			OpenTab({ title: title, url: url, open_tab: open_tab });
		},
		closeAllTab() {
			CloseAllTabs();
		}
	}
};
</script>

<style lang="scss" scoped></style>
