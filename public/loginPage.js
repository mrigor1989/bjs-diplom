"use strict"
let form = new UserForm();

form.loginFormCallback = data => { 
    ApiConnector.login(data, res => {
        if(res.success) {
            location.reload();
        } else {
            form.setLoginErrorMessage(res.error)
        }
    })
} 


form.registerFormCallback = data => {
    ApiConnector.register(data, res => {
        if(res.success) {
            location.reload();
        } else {
            form.setRegisterErrorMessage(res.error)
        }
    })
}
// form.registerFormCallback = data => console.log(data)

// ApiConnector.login({login: '1oleg@demo.ru', password: 'demo'}, res => console.log(res))