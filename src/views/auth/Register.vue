<template>
  <div class="card shadow-sm">
    <div class="card-header">Register a new account</div>
    <div class="card-body">
      <form @submit.prevent="submitRegister">
        <div class="form-group">
          <label for="form-name">your name *</label>
          <input
            type="text"
            v-model="form.fields.name"
            class="form-control"
            id="form-name"
            v-bind:class="{'is-invalid': form.errors.name}"
            @focus="REMOVE_ERROR('name')"
          />
          <div class="invalid-feedback">{{ form.errors.name}}</div>
        </div>
        <div class="form-group">
          <label for="form-email">your email *</label>
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
          <label for="form-password">
            chosen password *
            <small>(&ge; 8 chars)</small>
          </label>
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
          <button type="submit" class="btn btn-success">register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("auth", ["form"])
  },
  methods: {
    ...mapActions("auth", ["submitRegister"]),
    ...mapMutations("auth", ["REMOVE_ERROR"])
  }
};
</script>