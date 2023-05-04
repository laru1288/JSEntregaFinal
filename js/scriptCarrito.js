let carrito = [];
let contar;


let carritoDOM = document.getElementById("carrito");
let btnComprar = document.getElementById("comprar");
btnComprar.addEventListener("click", comprar);

function cargarCarrito(aProds) {
    let total = 0;
    carritoDOM.innerHTML = "";

   
    aProds.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("carritoProducto");
        div.innerHTML += `<div class="carritoNombre">
        <h3>${producto.nombre}</h3>
        </div>
        <div class="carritoCant">
        <small>Cantidad</small>
        <p>${producto.cant}</p>
        </div>
        <div class="carritoPrecio">
        <small>Precio</small>
        <p>$${producto.precio}</p>
        </div>
        <div class="carritoSubtotal">
        <small>Subtotal</small>
        <p>$${producto.subtotal}</p>
        </div>
        `
        carritoDOM.append(div);
        total = total+producto.subtotal;
    })

    carritoDOM.innerHTML += `<h3 class="total">Total = ${total}</h3>`;


}

function comprar() {
    Swal.fire({
        title: 'Compra finalizada!',
        text: 'Tu compra fue realizada con exito.',
        icon: 'success',
        confirmButtonText: 'Continuar',
        confirmButtonColor: '#FAD7EA',
        color: '#472C21',
        background: '#FAD7EA'
      });

    localStorage.removeItem("carrito");
    carrito = [];
    cargarCarrito(carrito);
    contar = 0;
    contador.innerHTML = contar;
    localStorage.removeItem("contar");
}

if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    contar = localStorage.getItem("contar");
    cargarCarrito(carrito);
    contador.innerHTML = contar;
}