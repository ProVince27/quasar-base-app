// import { Router } from '../../router'

/*  */
export function signIn ({ commit, dispatch }, payload) {
    commit('SET_AUTH_USER',payload)
    dispatch('redirectDashBoard')
}

export function signOut({commit}) {
    commit('SIGNOUT')
    this.$router.replace({'name':'login'})
} 


export function redirectDashBoard(){
   this.$router.push({name:'dashboard'})
}
