const item_name_input = document.getElementById('item-name')
const item_price_input = document.getElementById('item-price')
const item_submit_button = document.getElementById('submit')
const user_display_name = document.getElementById('user-name')
const item_list = document.getElementById('itens-list')

const handleNewItem = () =>{
    const newItem = document.createElement('li')
    const itemBody =  `${item_name_input.value} - R$ ${item_price_input.value}`
    newItem.innerHTML = itemBody
    let active_user = JSON.parse(localStorage.getItem('active_user'))
    let users = JSON.parse(localStorage.getItem('users'))
    active_user = {...active_user,itens : [...active_user.itens,itemBody]}
    
    users = users.filter(user => user.name != active_user.name)
    users = [...users,active_user]
    localStorage.setItem('users',JSON.stringify(users))
    localStorage.setItem('active_user', JSON.stringify(active_user))
    
    item_list.appendChild(newItem)
}
const getUserInformations = () => {
    const active_user = JSON.parse(localStorage.getItem('active_user'))
    const itens = active_user.itens
    itens.map(x =>{
        const newLi = document.createElement('li')
        newLi.innerHTML = x
        item_list.appendChild(newLi)
    })
}
getUserInformations()
item_submit_button.addEventListener('click',handleNewItem)