'use strict'


export function rememberSave(email, password, rememberMe) {
    // alert(email);
}

export function login(email, password, rememberMe) {

    rememberSave(email, password, rememberMe);

    sessionStorage.setItem('isLoggedIn', true);
    sessionStorage.setItem('email', email);

    return true;

}
