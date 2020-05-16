// import { Router } from '../../router'

/*  */
export function signIn ({ commit, dispatch }, payload) {
    commit('SET_AUTH_USER',payload)
    dispatch('redirectDashBoard')
}

export function redirectDashBoard(){
   this.$router.push({name:'dashboard'})
}
