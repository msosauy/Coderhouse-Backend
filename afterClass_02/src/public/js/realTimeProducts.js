const socket = io();

console.log('Conectado al servidor')

socket.on('productsList', (products) => {
    const $container = document.getElementById('listProducts');

    $container.innerHTML = '';

    let div;

    products.forEach(product => {
        const div = document.createElement('div');
        div.innerHTML += `<div id="card">
				<h3>${product.title}</h3>
				<p>${product.description}</p>
				<p>${product.price}</p>
				<p>${product.code}</p>
				</div>
				`;

        $container.appendChild(div);
    });
})

const form = document.getElementById('newProduct');
form.addEventListener('submit', async (e) => {
    const target = e.target;
    e.preventDefault();
    const newProduct = {
        title: target.title.value,
        description: target.description.value,
        price: +target.price.value,
        code: target.code.value
    }

    socket.emit('sendProduct', newProduct);
})