<template>
	<div class="auth_form">
		<div class="container fill_height">
			<div class="row">
				<div class="col-md-6">
					<form @submit.prevent="signIn" role="form">
						<fieldset>
							<div class="form-group">
								<input class="form-control" placeholder="E-mail" name="email" type="text"
								v-model="login.email"
								v-validate="'required|email'">
							</div>
							<div class="error">
								<span v-show="errors.has('email')">{{errors.first('email')}}</span>
							</div>
							<div class="form-group">
								<input class="form-control" placeholder="Password" name="password" type="password"
								v-model="login.password" v-validate="'required|min:6'">
							</div>
							<div class="error">
								<span v-show="errors.has('password')">{{errors.first('password')}}</span>
							</div>
							<div class="checkbox">
								<label>
									<input name="remember" type="checkbox" value="Remember Me"> Remember Me
								</label>
							</div>

							<a class="btn btn-lg btn-success btn-block" type="submit" @click="signIn">
								Login <i v-if="loader" class="fa fa-spinner fa-spin"></i>
							</a>
						</fieldset>
					</form>
				</div>
				<div class="col-md-6">
					<registration-form></registration-form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import RegistrationForm from "./RegistrationForm";
export default {
	components: {RegistrationForm},
	data() {
		return {
			login: {},
			loader: false,
			message: '',
		}
	},

	computed: {
		
	},
	methods: {
		signIn() {
			this.$validator.validateAll().then(valid => {
				if (valid) {
					this.loader = true;
					axios.post('/api/auth/login', this.login).then(response => {
						if (response.data) {

							this.loader = false;

							if (response.data) {
								this.$store.dispatch('actionSetAuthenticatedDataToLocalStorage', response.data);

								this.$router.push({name: 'landing-page'});
							}
						}

					}).catch(error => {
						this.loader = false;
						console.log(error)
					})
				}
			})
		},
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