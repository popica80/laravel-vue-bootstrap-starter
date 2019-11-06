import axios from 'axios'
export default {
    namespaced: true,
    state: {
        auth: {
            logged_in: false,
            user: {}
        },
        form: {
            fields: {
                name: '',
                email: '',
                password: ''
            },
            errors: {}
        }        
    },
    getters: {},
    actions: {
        submitRegister({commit, state})
        {
            axios.post('register', {...state.form.fields}).then(response => {
                commit('SET_USER', response.data)
                router.push({name: 'home'})
            }).catch(error => {
                if(error.response.status == 422) {
                    commit('SET_ERRORS', error.response.data.errors);
                }
            });
        },
        submitLogin({commit, state})
        {
            axios.post('login', {...state.form.fields}).then(response => {
                commit('SET_USER', response.data)
                router.push({name: 'home'})
            }).catch(error => {
                if(error.response.status == 422) {
                    commit('SET_ERRORS', error.response.data.errors);
                }
                if(error.response.status == 401) {
                    commit('SET_ERRORS', error.response.data.errors);
                }
            });
        },
        logout({commit})
        {
            commit('SET_AUTH', null)
        }
    },
    mutations: {
        SET_AUTH(state, user) 
        {
            if(user) {
                state.auth.logged_in = true
                state.auth.user = user
            } else {
                state.auth.logged_in = false
                state.auth.user = {}
            }
        },
        SET_ERRORS(state, errors)
        {
            let errors_list = {};
            Object.entries(errors).forEach(([key, value]) => {
                errors_list[key] = value[0];
            });
            state.form.errors = errors_list;
        },
        REMOVE_ERROR(state, name)
        {
            state.form.errors[name] = '';
            state.form.errors['message'] = ''
        }
    },
}