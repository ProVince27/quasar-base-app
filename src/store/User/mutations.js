
export function SET_AUTH_USER (state,payload) {
    state.authenticated = payload.authenticate
    state.user.username = payload.username
}

export function SIGNOUT (state){
    state.authenticated = false
    state.user.username = null
}