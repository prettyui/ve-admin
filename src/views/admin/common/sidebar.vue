<template>
	<div class="vea-side-bar-container">
		<el-menu
			default-active=""
			class="el-menu-vertical-demo"
			@open="handleOpen"
			@close="handleClose"
			background-color="#e3e9f1"
			text-color="#000"
			active-text-color="#1e82e8"
		>
			<div v-for="(item, index) in sideBarData" :key="index">
				<el-submenu v-if="item.children" :index="index + item.url">
					<template slot="title">
						<i :class="'el-icon-' + item.icon"></i>
						<span slot="title">{{ item.content }}</span>
					</template>
					<el-menu-item-group>
						<el-menu-item
							:index="subItem.url"
							v-for="(subItem, subIndex) in item.children"
							:key="subIndex"
							@click.native="clickSidebarMenu(subItem.content, subItem.url, subItem.open_in_tab)"
						>
							<i :class="'el-icon-' + subItem.icon"></i>
							<span slot="title">{{ subItem.content }}</span>
						</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-menu-item v-else :index="item.url" @click.native="clickSidebarMenu(item.content, item.url, item.open_in_tab)">
					<i :class="'el-icon-' + item.icon"></i>
					<span slot="title">{{ item.content }}</span>
				</el-menu-item>
			</div>
		</el-menu>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	//定义方法
	methods: {
		handleOpen(key, keyPath) {
			//console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			//console.log(key, keyPath);
		},
		clickSidebarMenu(title, url, open_tab) {
			//console.log(title, url);
			this.$parent.openTab(title, url, open_tab);
		}
	},
	//获取父组件传递过来的值
	props: {
		sideBarData: {
			type: Array,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped></style>
