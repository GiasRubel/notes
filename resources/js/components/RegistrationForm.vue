<template>
	<div>
		<h2>{{ message }}</h2>
		<form @submit.prevent="signUp" role="form">
			<fieldset>
				<div class="form-group">
					<input class="form-control" placeholder="Name" name="name" type="text"
					v-model="ragistration.name"
					v-validate="'required'">
				</div>
				<div class="error">
					<span v-show="errors.has('name')">{{errors.first('name')}}</span>
				</div>
				<div class="form-group">
					<input class="form-control" placeholder="E-mail" name="email" type="text"
					v-model="ragistration.email"
					v-validate="'required|email'">
				</div>
				<div class="error">
					<span v-show="errors.has('email')">{{errors.first('email')}}</span>
				</div>
				<div class="form-group">
					<input class="form-control" placeholder="Password" name="password" type="password"
					v-model="ragistration.password" v-validate="'required|min:6'">
				</div>
				<div class="error">
					<span v-show="errors.has('password')">{{errors.first('password')}}</span>
				</div>

				<a class="btn btn-lg btn-success btn-block" type="submit" @click="signUp">
					signUp <i v-if="loader" class="fa fa-spinner fa-spin"></i>
				</a>
			</fieldset>
		</form>
	</div>
</template>

<script>

export default {
	data() {
		return {
			ragistration: {},
			loader: false,
			message: '',
		}
	},


	methods: {
	

		signUp() {
			this.$validator.validateAll().then(valid => {
				if (valid) {
					this.loader = true;
					axios.post('/api/auth/registration', this.ragistration).then(response => {
						if (response.data) {

							this.loader = false;

							if (response.data.message) {
								this.message = response.data.message;
							}
						}

					})
				}
			})
			.catch(error => {
				this.loader = false;
				console.log(error)
			})
		}
	}
}
</script>

<style scoped>
.auth_form {
	width: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;

}
</style>