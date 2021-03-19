<template>
	<div>
		<el-menu default-active="" @open="handleOpen" @close="handleClose" background-color="#e3e9f1" text-color="#000" active-text-color="#1e82e8">
			<div v-for="(item, index) in sideBarData" :key="index">
				<el-submenu v-if="item.children" :index="index + '-' + item.url">
					<template slot="title">
						<i :class="item.icon"></i>
						<span slot="title">{{ item.label }}</span>
					</template>
					<el-menu-item-group>
						<el-menu-item
							v-for="(subItem, subIndex) in item.children"
							:key="subIndex"
							:index="index + '-' + subIndex + '-' + subItem.url"
							@click.native="clickSidebarMenu(subItem.label, subItem.url, subItem.open_tab)"
						>
							<i :class="subItem.icon"></i>
							<span slot="title">{{ subItem.label }}</span>
						</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-menu-item v-else :index="index + '-' + item.url" @click.native="clickSidebarMenu(item.label, item.url, item.open_tab)">
					<i :class="item.icon"></i>
					<span slot="title">{{ item.label }}</span>
				</el-menu-item>
			</div>
		</el-menu>
	</div>
</template>

<script>
export default {
	data() {
		return {
			sideBarData: [
				{
					label: "管理图片",
					url: "/admin/manage_images",
					icon: "el-icon-picture-outline",
					open_tab: true,
					children: null
				},
				{
					label: "管理咨询",
					url: "",
					icon: "el-icon-folder-opened",
					children: [
						{
							label: "管理文章",
							url: "/admin/manage_articles",
							icon: "el-icon-notebook-2",
							open_tab: true
						},
						{
							label: "管理分类",
							url: "/admin/manage_category",
							icon: "el-icon-s-management",
							open_tab: true
						}
					]
				},
				{
					label: "系统设置",
					url: "/admin/system_settings",
					icon: "el-icon-s-tools",
					open_tab: true,
					children: null
				}
			]
		};
	},
	//定义方法
	methods: {
		handleOpen(key, keyPath) {
			//console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			//console.log(key, keyPath);
		},
		clickSidebarMenu(label, url, open_tab) {
			//console.log(label, url);
			this.$parent.openTab(label, url, open_tab);
		}
	}
};
</script>

<style lang="scss" scoped></style>
