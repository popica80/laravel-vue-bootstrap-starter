<template>
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container">
        <router-link :to="{name: 'home'}" class="navbar-brand" href="#">Starter</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                page
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <template v-if="!auth.logged_in">
            <li class="nav-item">
              <router-link :to="{name: 'login'}" class="nav-link">
                sign in 
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'register'}" class="nav-link">
                register 
              </router-link>
            </li>
            </template>
            <li class="nav-item dropdown" v-else>
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >{{ auth.user.name }}</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#" @click.prevent="logout()">logout</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('auth', ['auth'])
  },
  methods: {
    ...mapActions('auth', ['logout'])
  } 
}
</script>