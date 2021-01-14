<template>
	<div>
		<div class="vea-content-header-bar" :style="TabBackground">
			<div class="vea-content-header-bar-tab">
				<ul>
					<li class="active" :style="TabBackground" @click="clickTab()">
						<span>我的桌面</span>
						<em :style="TabBackground"></em>
					</li>
				</ul>
			</div>
			<div class="vea-content-header-bar-button">
				<el-button class="vea-content-close-button" type="warning" size="mini" @click="closeAllTab()">
					<i class="el-icon-caret-left"></i>
					<i class="el-icon-circle-close"></i>
					关闭全部
				</el-button>
			</div>
		</div>
		<div class="vea-content-iframe-box" id="vea-content-iframe-box">
			<div class="vea-content-iframe" style="display: block;">
				<iframe frameborder="0" src="../#/admin/welcome"></iframe>
			</div>
		</div>
	</div>
</template>

<script>
import TabBackground from "@/assets/ve-admin/image/tabBackground.png";
import TabBackgroundClose from "@/assets/ve-admin/image/tabBackground-close.png";
import { ClickTab, OpenTab, CloseAllTabs } from "@/assets/ve-admin/ve-admin.js";
export default {
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
