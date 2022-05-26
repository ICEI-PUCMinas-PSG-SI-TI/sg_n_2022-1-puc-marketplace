const name_cad_input = document.getElementById('nome_cad')
const email_cad_input = document.getElementById('email_cad')
const pass_cad_input = document.getElementById('senha_cad')
const submit_cad_button = document.getElementById('submit_cad')

const email_login_input = document.getElementById('email_login')
const senha_login_input = document.getElementById('senha_login')
const submit_login_button = document.getElementById('submit_login')

const handleSubmitCadastro = () => {
    const newUser = {
        name: name_cad_input.value,
        email: email_cad_input.value,
        password: pass_cad_input.value,
        itens: []
    }
    const users = JSON.parse(localStorage.getItem('users'))
    if(!users){
        localStorage.setItem('users','[]')
    }
    const newUsers = [...users,newUser]
    console.log(newUsers)
    localStorage.setItem('users',JSON.stringify(newUsers))
    window.alert('Usuario Cadastrado')
}
const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users'))
    const login_values = {
        email: email_login_input.value,
        password: senha_login_input.value
    }
    let isLogged = false
    let active_user = {}
    users.map(user=> {
        if(user.email === login_values.email && user.password === login_values.password){
            isLogged = true,
            active_user = user
            localStorage.setItem('active_user',JSON.stringify(user))
        }
    })
    if(isLogged){
        window.alert(`Bem vindo ${active_user.name}`)
        window.location.href = 'catalog.html'
    }
    else {
        window.alert('Usuario Inválido')
    }
}

submit_cad_button.addEventListener('click', handleSubmitCadastro)
submit_login_button.addEventListener('click', handleLogin)