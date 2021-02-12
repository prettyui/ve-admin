<template>
	<div>
		<div class="veadmin-iframe-header veadmin-iframe-header-custom-fixed">
			<span>当前位置:</span>
			系统设置
			<button class="veadmin-iframe-button" onclick="location.reload()">
				<i class="el-icon-refresh-right"></i>
			</button>
		</div>
		<div class="veadmin-iframe-content veadmin-iframe-content-custom-fixed">
			<el-form ref="form" :model="form" label-width="80px" style="margin-top:10px;padding-left:20px;width:700px;">
				<el-form-item label="域名">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="8080端口">
					<el-select v-model="form.region" placeholder="请选择">
						<el-option label="开放" value="yes"></el-option>
						<el-option label="不开放" value="no"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="结束时间">
					<el-col :span="11">
						<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
					</el-col>
					<el-col class="line" :span="2">-</el-col>
					<el-col :span="11">
						<el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
					</el-col>
				</el-form-item>
				<el-form-item label="外网访问">
					<el-switch v-model="form.delivery"></el-switch>
				</el-form-item>
				<el-form-item label="其他限制">
					<el-checkbox-group v-model="form.type">
						<el-checkbox label="限制失败次数" name="type"></el-checkbox>
						<el-checkbox label="限制小时访问量" name="type"></el-checkbox>
						<el-checkbox label="限制登录账号" name="type"></el-checkbox>
						<el-checkbox label="限制高敏操作" name="type"></el-checkbox>
					</el-checkbox-group>
				</el-form-item>
				<el-form-item label="特殊资源">
					<el-radio-group v-model="form.resource">
						<el-radio label="Admin账号启用"></el-radio>
						<el-radio label="Guest账号启用"></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="备注">
					<el-input type="textarea" v-model="form.desc"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">保存设置</el-button>
					<el-button>取消</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name: "",
				region: "",
				date1: "",
				date2: "",
				delivery: false,
				type: [],
				resource: "",
				desc: ""
			}
		};
	},
	methods: {
		onSubmit() {
			console.log("submit!");
		}
	}
};
</script>

<style lang="scss" scoped></style>
