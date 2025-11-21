let compras = [];
const form_productos = document.getElementById("form_productos")


/*Verifica si es mayor de edad*/
const comprar = document.getElementById("comprar")
comprar.disabled = true
comprar.addEventListener('mouseover', () => {
    const edad = document.getElementById("edad").value;
    if(edad > 17){
        comprar.disabled = false
    } else{
        const mensaje = document.getElementById("mensaje")
        mensaje.textContent = "No cumples con la mayoria de edad"
    }
})

/*Evento que confirma que has realizado la compra*/
comprar.addEventListener('click', () => {
    const mensaje = document.getElementById("mensaje")
    mensaje.textContent = "¡Comprar Realizada!"
});


/*Evento para colocar datos en la tabla*/
const btn = document.getElementById('enviar');
form_producto.addEventListener('submit', function (e) {
    e.preventDefault();

    const productoNombre = document.getElementById('producto').value;
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const precioUnitario = parseFloat(document.getElementById('precioUnitario').value);

    compras.push({productoNombre,cantidad,precioUnitario});

    LimpiarForm();

    agregarFila();
});


/* Funcion que calcula el total de las compras */
const totalBtn = document.getElementById('calcular');
totalBtn.addEventListener('click', () =>{
    let total = 0;
    compras.forEach((compra) => {
        total += compra.cantidad * compra.precioUnitario;
    });
    document.getElementById('total').textContent = total.toFixed(2);
});



/*Funcion para agregar filas a la tabla de compras*/
function agregarFila() {
    const tabla = document.getElementById('productos');
    tabla.innerHTML = ""

    compras.forEach((compra) => {
        const fila = document.createElement('tr');

        const product = document.createElement('td');
        product.textContent = compra.productoNombre;

        const cantidad = document.createElement('td');
        cantidad.textContent = compra.cantidad;

        const precio = document.createElement('td');
        precio.textContent = compra.precioUnitario.toFixed(2);

        fila.append(product, cantidad, precio);
        tabla.appendChild(fila)
    });
}



/* Limpiar formulario */
function LimpiarForm(){
    const producto = document.getElementById("producto")
    const cantidad = document.getElementById("cantidad")
    const precio = document.getElementById("precioUnitario")

    producto.textContent = ""
    cantidad.textContent = ""
    precio.textContent = ""
}