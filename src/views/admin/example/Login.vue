<template>
	<div>
		<div class="header">ve-admin {{ this.Version() }} 后台登录</div>
		<div class="main">
			<div class="login-box">
				<el-form :model="postForm" status-icon :rules="rules" ref="postForm" label-width="30px" style="margin-right: 30px;margin-top: 30px;">
					<el-form-item label="" prop="phone">
						<i class="el-icon-mobile-phone" style="color: #777;font-size: x-large;vertical-align: middle;"></i>
						<el-input
							type="number"
							v-model.number="postForm.phone"
							placeholder="请输入手机号"
							@mousewheel.native.prevent
							style="width: 250px;margin-left:10px;"
						></el-input>
					</el-form-item>
					<el-form-item label="" prop="password">
						<i class="el-icon-lock" style="color: #777;font-size: x-large;vertical-align: middle;"></i>
						<el-input
							type="password"
							v-model="postForm.password"
							placeholder="请输入密码"
							style="width: 250px;margin-left:10px;"
						></el-input>
					</el-form-item>
					<el-form-item label="" prop="">
						<el-input placeholder="请输入验证码" style="width: 120px;"></el-input>
						<el-tooltip class="item" effect="dark" content="换一张" placement="bottom">
							<img src />
							<span style="padding: 10px 20px;background-color: #ccc;border-radius: 2px;margin: 6px;">a s 5 6</span>
						</el-tooltip>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitLoginForm('postForm')" style="width: 100px;">登录</el-button>
						<el-button @click="resetForm('postForm')" style="width: 100px;margin-left: 18px;">注册</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<div class="footer">Copyright © 你的公司名称 by ve-admin {{ this.Version() }}</div>
	</div>
</template>

<script>
export default {
	data() {
		var checkPhone = (rule, value, callback) => {
			if (!value) {
				return callback(new Error("手机号不能为空"));
			} else if (!Number.isInteger(value)) {
				callback(new Error("请输入数字值"));
			} else {
				callback();
			}
		};
		var validatePassword = (rule, value, callback) => {
			if (value === "") {
				callback(new Error("请输入密码"));
			} else {
				callback();
			}
		};
		return {
			postForm: {
				phone: "",
				password: ""
			},
			rules: {
				phone: [{ validator: checkPhone, trigger: "blur" }],
				password: [{ validator: validatePassword, trigger: "blur" }]
			}
		};
	},
	methods: {
		submitLoginForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					console.log("postForm:", this.postForm);
				} else {
					console.log("error submit!!");
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		}
	}
};
</script>

<style lang="scss">
/* element样式重置 start */
/* 去掉input尾部上下小箭头 start */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none !important;
	-moz-appearance: none !important;
	-o-appearance: none !important;
	-ms-appearance: none !important;
	appearance: none !important;
	margin: 0;
}
input[type="number"] {
	-webkit-appearance: textfield;
	-moz-appearance: textfield;
	-o-appearance: textfield;
	-ms-appearance: textfield;
	appearance: textfield;
}
/* 去掉input尾部上下小箭头 end */
</style>
<style lang="scss" scoped>
.header {
	top: 0;
	height: 60px;
	background: #426374;
	font-size: x-large;
	text-align: center;
	color: #ddd;
	padding-top: 12px;
}
.main {
	position: absolute;
	width: 100%;
	top: 60px;
	bottom: 46px;
	background: #c6dbe8;
}
.footer {
	position: absolute;
	width: 100%;
	height: 46px;
	line-height: 46px;
	bottom: 0;
	text-align: center;
	color: #ccc;
	font-size: x-small;
	background-color: #426374;
}

.login-box {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	background-color: #fff;
	border-radius: 4px;
	padding: 30px;
	z-index: 9;
}
a {
	text-decoration: none;
	color: #000000;
}
</style>
