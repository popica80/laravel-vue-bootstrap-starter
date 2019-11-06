<template>
	<div class="card shadow-sm">
		<div class="card-header">Sign In</div>
		<div class="card-body">
			<form @submit.prevent="submitLogin">
				<div class="form-group">
					<label for="form-email">your email</label>
					<input
						type="email"
						v-model="form.fields.email"
						class="form-control"
						id="form-email"
						v-bind:class="{'is-invalid': form.errors.email}"
						@focus="REMOVE_ERROR('email')"
					/>
					<div class="invalid-feedback">{{ form.errors.email}}</div>
				</div>
				<div class="form-group">
					<label for="form-password">your password</label>
					<input
						type="password"
						v-model="form.fields.password"
						class="form-control"
						id="form-password"
						v-bind:class="{'is-invalid': form.errors.password}"
						@focus="REMOVE_ERROR('password')"
					/>
					<div class="invalid-feedback">{{ form.errors.password}}</div>
				</div>
				<div class="form-group">
					<button type="submit" class="btn btn-primary">log in</button>
				</div>
			</form>
			<div
				v-if="form.errors.message"
				class="alert alert-warning"
				role="alert"
			>{{ form.errors.message }}</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
	computed: {
		...mapState('auth', ['form'])
	},
	methods: {
		...mapActions('auth', ['submitLogin']),
		...mapMutations('auth', ['REMOVE_ERROR'])
	}
};
</script>