const name_cad_input = document.getElementById('nome_cad')
const email_cad_input = document.getElementById('email_cad')
const pass_cad_input = document.getElementById('senha_cad')
const submit_cad_button = document.getElementById('submit_cad')

const email_login_input = document.getElementById('email_login')
const senha_login_input = document.getElementById('senha_login')
const submit_login_button = document.getElementById('submit_login')

const handleSubmitCadastro = () => {
    var numeros = /([0-9])/;
    var alfabeto = /([a-zA-Z])/;
    var chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
    
    if(!email_cad_input.value.includes("@"&&".com")){
        window.alert("Email Inválido")
        return
    }
    if(name_cad_input.value.length <3){
        window.alert("Nome Inválido")
        return
    }
    if(!pass_cad_input.value.match(numeros) || !pass_cad_input.value.match(alfabeto) || !pass_cad_input.value.match(chEspeciais) || !pass_cad_input.value.length>=8){
        window.alert("Senha Inválida, digite pelo menos um número, uma letra e minúscula e maiúscula, e um caracter especial dentre esses : ~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,< ")
        return
    }
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
    email_cad_input.value=""
    name_cad_input.value=""
    pass_cad_input.value=""
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