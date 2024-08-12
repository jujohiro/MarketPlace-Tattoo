import { insumosTattoo } from './products.js';

function createCardInsumoTattoo(insumo) {
    // Crear contenedor principal de cada producto
    const containerInsumos = document.createElement('div');
    containerInsumos.classList.add('product1');
    containerInsumos.id = insumo.id;

    // Crear y agregar la imagen
    const img = document.createElement('img');
    img.src = insumo.image;
    img.alt = insumo.product;
    img.classList.add('img');
    containerInsumos.appendChild(img);

    // Crear y agregar el título del producto
    const title = document.createElement('h3');
    title.textContent = insumo.product;
    containerInsumos.appendChild(title);

    // Crear y agregar la descripción del producto
    const description = document.createElement('p');
    description.classList.add('par');
    description.textContent= insumo.description.replaceAll('<br>', '');
    containerInsumos.appendChild(description);

    // Crear y agregar el precio del producto
    const price = document.createElement('span');
    price.classList.add('price');
    price.textContent = `$${insumo.price.toLocaleString('es-CO')}/unidad`;
    containerInsumos.appendChild(price);

    // Crear y agregar el botón de "Añadir al carrito"
    const button = document.createElement('button');
    button.classList.add('buttons');
    button.type = 'button';
    button.textContent = 'Añadir al carrito';
    button.id= insumosTattoo.id
    button.addEventListener('click', event => {
        console.log(event.target)
    })
    containerInsumos.appendChild(button);

    return containerInsumos;
}

function renderInsumosTattoo() {
    const productosContainer = document.getElementById('productos-container');
    insumosTattoo.forEach(insumo => {
        const insumoCard = createCardInsumoTattoo(insumo);
        productosContainer.appendChild(insumoCard);
    });
}

// Llamar a la función para renderizar los productos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    renderInsumosTattoo();
});
