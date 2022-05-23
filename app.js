//constructor
class Clientes{
    constructor(nombre, apellido, frecuencia, preferencia){
        this.nombre = nombre;
        this.apellido = apellido;
        this.frecuencia = frecuencia;
        this.preferencia = preferencia; 
    }
}
class Proveedores{
    constructor(nombre, ubicacion, tipo){
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.tipo = tipo;
    }
}
class Productos{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

//arrays
let clientes = []
let proveedores = []
let vinosBlancos = []
let vinosEspumosos = []
let vinosTintos = []

//pushear clientes

//pushear proveedores
proveedores.push(new Proveedores("Salamanca S.A.", "Lanus", "A"))
proveedores.push(new Proveedores("Fremua S.A.", "La paz", "C"))
proveedores.push(new Proveedores('Saavedra S.R.L.', "Belgrano", "B"))
proveedores.push(new Proveedores("Fernandez S.A.", "San Bernardo", "A"))
proveedores.push(new Proveedores("Zuviria S.R.L.", "Caballito", "A"))
proveedores.push(new Proveedores("Saladillo S.A.", "Ramos Mejia", "C"))
//pushear productos
vinosBlancos.push(new Productos("Dulce Dilema", 3100, 214))
vinosBlancos.push(new Productos("Putruele Tardío De Abril", 1500, 230))
vinosEspumosos.push(new Productos("Champagne Baron B Extra Brut", 7000, 40))
vinosEspumosos.push(new Productos("Espumante Freixenet Italian Rose Sparkling", 4000, 20))
vinosEspumosos.push(new Productos("Champagne Brut Ros", 5000, 40))
vinosTintos.push(new Productos("Rutini Vin Doux Naturel", 1400, 70))
vinosTintos.push(new Productos("Norton Rosado Malbec", 1600, 50))
vinosTintos.push(new Productos("Dada 7 Finca Las Moras", 1700, 40))
vinosTintos.push(new Productos("Lambrusco Rosso Amabile", 1900, 54))
vinosTintos.push(new Productos("Don Valentin", 4000, 26))

//funcion Toastify
const toastify = (mensaje) => {
    Toastify({
        text: mensaje,
        duration: 2000,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();
}

//creador de array en localStorage
if(localStorage.getItem('Clientes')){
    clientes = JSON.parse(localStorage.getItem('Clientes'))
}else{
    localStorage.setItem("Clientes", JSON.stringify(clientes))
}
if(localStorage.getItem('Proveedores')){
    proveedores = JSON.parse(localStorage.getItem('Proveedores'))
}else{
    localStorage.setItem("Proveedores", JSON.stringify(proveedores))
}
if(localStorage.getItem('Vinos Blancos')){
    vinosBlancos = JSON.parse(localStorage.getItem('Vinos Blancos'))
}else{
    localStorage.setItem("Vinos Blancos", JSON.stringify(vinosBlancos))
}
if(localStorage.getItem('Vinos Espumosos')){
    vinosEspumosos = JSON.parse(localStorage.getItem('Vinos Espumosos'))
}else{
    localStorage.setItem("Vinos Espumosos", JSON.stringify(vinosEspumosos))
}
if(localStorage.getItem('Vinos Tintos')){
    vinosTintos = JSON.parse(localStorage.getItem('Vinos Tintos'))
}else{
    localStorage.setItem("Vinos Tintos", JSON.stringify(vinosTintos))
}


//Agregar valores a la tabla de clientes
document.querySelector("#formularioClientes").addEventListener("submit", (e) => {
    e.preventDefault()
    document.querySelector("#tablaClientes").innerHTML += `
        <tr>
            <td>${clientesN.value}</td>
            <td>${clientesA.value}</td>
            <td>${clientesF.value}</td>
            <td>${clientesP.value}</td>
        </tr>
        `
    clientes.push(new Clientes(clientesN.value, clientesA.value, clientesF.value, clientesP.value))
    localStorage.setItem("Clientes", JSON.stringify(clientes))
    document.querySelector("#formularioClientes").reset()
    toastify("Cliente agregado")
})
//Agregar valores a la tabla de proveedores
document.querySelector("#formularioProveedores").addEventListener("submit", (e) => {
    e.preventDefault()
    document.querySelector("#tablaProveedores").innerHTML += `
    <tr>
        <td>${proveedoresN.value}</td>
        <td>${proveedoresU.value}</td>
        <td>${proveedoresT.value}</td>
    </tr>
    `
    proveedores.push(new Proveedores(proveedoresN.value, proveedoresU.value, proveedoresT.value))
    localStorage.setItem("Proveedores", JSON.stringify(proveedores))
    document.querySelector("#formularioProveedores").reset()
    toastify("Proveedor agregado")
})
//Agregar valores a la tabla de vinos blancos
document.querySelector("#formularioProductosB").addEventListener("submit", (e) => {
    e.preventDefault()
    document.querySelector("#tablaProductosB").innerHTML += `
    <tr>
        <td>${productosNB.value}</td>
        <td>${productosPB.value}</td>
        <td>${productosSB.value}</td>
    </tr>
    `
    vinosBlancos.push(new Productos(productosNB.value, productosPB.value, productosSB.value))
    localStorage.setItem("Vinos Blancos", JSON.stringify(vinosBlancos))
    document.querySelector("#formularioProductosB").reset()
    toastify("Producto agregado")
})
//Agregar valores a la tabla de vinos espumosos
document.querySelector("#formularioProductosE").addEventListener("submit", (e) => {
    e.preventDefault()
    document.querySelector("#tablaProductosE").innerHTML += `
    <tr>
        <td>${productosNE.value}</td>
        <td>${productosPE.value}</td>
        <td>${productosSE.value}</td>
    </tr>
    `
    localStorage.setItem("Vinos Espumosos", JSON.stringify(vinosEspumosos))
    document.querySelector("#formularioProductosE").reset()
    toastify("Producto agregado")
})
//Agregar valores a la tabla de vinos tintos
document.querySelector("#formularioProductosT").addEventListener("submit", (e) => {
    e.preventDefault()
    document.querySelector("#tablaProductosT").innerHTML += `
    <tr>
        <td>${productosNT.value}</td>
        <td>${productosPT.value}</td>
        <td>${productosST.value}</td>
    </tr>
    `
    localStorage.setItem("Vinos Tintos", JSON.stringify(vinosTintos));
    document.querySelector("#formularioProductosT").reset()
    toastify("Producto agregado")
})

//Agregar valores del localStorage a la tabla de clientes
JSON.parse(localStorage.getItem("Clientes")).forEach(cliente => {
    document.querySelector('#tablaClientes').innerHTML += `
    <tr>
        <td>${cliente.nombre}</td>
        <td>${cliente.apellido}</td>
        <td>${cliente.frecuencia}</td>
        <td>${cliente.preferencia}</td>
    </tr>
    `
})
//Agregar valores del localStorage a la tabla de proveedores
JSON.parse(localStorage.getItem("Proveedores")).forEach(proveedor => {
    document.querySelector('#tablaProveedores').innerHTML += `
    <tr>
        <td>${proveedor.nombre}</td>
        <td>${proveedor.ubicacion}</td>
        <td>${proveedor.tipo}</td>
    </tr>
    `
})
//Agregar valores del localStorage a la tabla de vinos blancos
JSON.parse(localStorage.getItem("Vinos Blancos")).forEach(vinoB => {
    document.querySelector('#tablaProductosB').innerHTML += `
    <tr>
        <td>${vinoB.nombre}</td>
        <td>${vinoB.precio}</td>
        <td>${vinoB.stock}</td>
    </tr>
    `
})
//Agregar valores del localStorage a la tabla de vinos espumosos
JSON.parse(localStorage.getItem("Vinos Espumosos")).forEach(vinoE => {
    document.querySelector('#tablaProductosE').innerHTML += `
    <tr>
        <td>${vinoE.nombre}</td>
        <td>${vinoE.precio}</td>
        <td>${vinoE.stock}</td>
    </tr>
    `
})
//Agregar valores del localStorage a la tabla de vinos tintos
JSON.parse(localStorage.getItem("Vinos Tintos")).forEach(vinoT => {
    document.querySelector('#tablaProductosT').innerHTML += `
    <tr>
        <td>${vinoT.nombre}</td>
        <td>${vinoT.precio}</td>
        <td>${vinoT.stock}</td>
    </tr>
    `
})