/* ===========================
   CARGAR MENÚ
=========================== */
async function cargarMenu() {
    const contenedor = document.getElementById("menu-container");
    if (!contenedor) return;


    const estaEnPage = window.location.pathname.includes("/page/");
    const rutaMenu = estaEnPage ? "../menu.html" : "menu.html";


    try {
        const respuesta = await fetch(rutaMenu);
        contenedor.innerHTML = await respuesta.text();
    } catch (error) {
        console.error("Error cargando menú:", error);
    }
}


/* ===========================
   CARGAR FOOTER
=========================== */
async function cargarFooter() {
    const contenedor = document.getElementById("footer-container");
    if (!contenedor) return;


    const estaEnPage = window.location.pathname.includes("/page/");
    const rutaFooter = estaEnPage ? "../footer.html" : "footer.html";


    try {
        const respuesta = await fetch(rutaFooter);
        contenedor.innerHTML = await respuesta.text();
    } catch (error) {
        console.error("Error cargando footer:", error);
    }
}


cargarMenu();
cargarFooter();


/* ===========================
   FORMULARIOS
=========================== */
function guardarProducto(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;


    alert(`Producto guardado:
Nombre: ${nombre}
Precio: ${precio}
Cantidad: ${cantidad}`);
}


function enviarMensaje(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombreC").value;
    const correo = document.getElementById("correoC").value;
    const mensaje = document.getElementById("mensajeC").value;


    alert(`Mensaje enviado:
Nombre: ${nombre}
Correo: ${correo}
Mensaje: ${mensaje}`);
}


