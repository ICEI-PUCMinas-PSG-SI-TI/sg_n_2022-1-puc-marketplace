const getProducts = () => {
    const you_user = localStorage.getItem('active_user');
    const usuarios = JSON.parse(localStorage.getItem('users')).filter(user => user !== you_user)
    // <div class="produtos-div">
    //     <ul class="produtos-list">
    //         <li class="produto">
    //             <img src="images/logo2.png" alt="Logo">
    //             <h1>Produto 1</h1>
    //             <p>Ususario</p>
    //             <p>Preço: R$ 100,00</p>
    //             <button>Comprar</button>
    //         </li>
    // </div>
    usuarios.map(user => {
        user.itens.map(item => {
            const item_name = item.split('-')[0];
            const item_price = item.split('-')[1];
            const produto = document.createElement('li');
            produto.classList.add('produto');
            produto.innerHTML = `
            <img src="images/logo2.png" alt="Logo">
            <h1>${item_name}</h1>
            <p>${user.name}</p>
            <p>Preço: ${item_price}</p>
            <button>Comprar</button>
            `;
            document.querySelector('.produtos-list').appendChild(produto);
        })
    })
}
getProducts();