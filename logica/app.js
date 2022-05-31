class Clientes{
    constructor(nombre, apellido, frecuencia, preferencia){
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.apellido = apellido;
        this.frecuencia = frecuencia;
        this.preferencia = preferencia; 
    }
}
class Proveedores{
    constructor(nombre, ubicacion, tipo){
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.tipo = tipo;
    }
}
class Productos{
    constructor(nombre, precio, stock){
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}
//arrays
let clientes = []
let proveedores = []
let vinosTintos = []
let vinosBlancos = []
let vinosEspumosos = []

//funcion Toastify
const toastify = (mensaje) => {
    Toastify({
        text: mensaje,
        duration: 2000,
        close: true,
        gravity: 'bottom',
        position: 'right',
        stopOnFocus: true,
        style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)',
        },
    }).showToast();
}
//creador de array en localStorage
const crearLS = (valor, array) => {
    if(localStorage.getItem(valor)){
        array = JSON.parse(localStorage.getItem(valor))
    }else{
        localStorage.setItem(valor, JSON.stringify(array))
    }
}
//funcion para traer los datos de localStorage
// const parse = (valor, tabla, _p1, _p2, _p3, _p4) =>{
//     JSON.parse(localStorage.getItem(valor)).forEach(object => {
//         document.querySelector(tabla).innerHTML += `
//         <tr>
//             <td>${object._p1}</td>
//             <td>${object._p2}</td>
//             <td>${object._p3}</td>
//             <td>${object._p4}</td>
//         </tr>
//         `
//     })
// }

//fetchs parar traer APIs o json
fetch('../logica/app.json')
    .then(res => res.json())
    .then(({cliente, proveedor}) => {
        cliente.forEach(object => {
            let {nombre, apellido, frecuencia, preferencia} = object
            clientes.push(new Clientes(nombre, apellido, frecuencia, preferencia))
            localStorage.setItem('Cliente', JSON.stringify(clientes))
        })
        proveedor.forEach(object => {
            let {nombre, ubicacion, tipo} = object
            proveedores.push(new Proveedores(nombre, ubicacion, tipo))
            localStorage.setItem('Proveedor', JSON.stringify(proveedores))
        })
    })
fetch('https://mocki.io/v1/c1dc5706-90e8-4d64-8f41-35cbca39aeb9')
    .then(res => res.json())
    .then(({productos}) => {
        productos.forEach(object => {
            let {vinoTinto, vinoBlanco, vinoEspumoso} = object
            vinoTinto.forEach(Tinto => {
                let {nombre, precio, stock} = Tinto
                vinosTintos.push(new Productos(nombre, precio, stock))
                localStorage.setItem('Vino Tinto', JSON.stringify(vinosTintos))
            })
            vinoBlanco.forEach(Blanco => {
                let {nombre, precio, stock} = Blanco
                vinosBlancos.push(new Productos(nombre, precio, stock))
                localStorage.setItem('Vino Blanco', JSON.stringify(vinosBlancos))
            })
            vinoEspumoso.forEach(Espumoso => {
                let {nombre, precio, stock} = Espumoso
                vinosEspumosos.push(new Productos(nombre, precio, stock))
                localStorage.setItem('Vino Espumoso', JSON.stringify(vinosEspumosos))
            })
        })
    })
//setInterval para actualizar los datos
setInterval(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=-34.62264&lon=-58.44104&appid=e77632dc208d5721876cd234a141d90a&lang=es')
        .then(res => res.json())
        .then(({main, name}) => {
        let {temp, humidity} = main
        let clima = Math.floor(temp-273.15)
        document.querySelector('#clima').innerHTML = `
        <p>Ciudad: ${name}</p>
        <p>Temperatura: ${clima}°C</p>
        <p>Humedad: ${humidity}%</p>
        `
        })
}, 1000)

crearLS('Cliente', clientes)
crearLS('Proveedor', proveedores)
crearLS('Vino Blanco', vinosBlancos)
crearLS('Vino Espumoso', vinosEspumosos)
crearLS('Vino Tinto', vinosTintos)

//Agregar valores a la tabla de clientes
document.querySelector('#formularioClientes').addEventListener('submit', (e) => {
    e.preventDefault()
    document.querySelector('#tablaClientes').innerHTML += `
    <tr>
        <td>${clienteN.value}</td>
        <td>${clienteA.value}</td>
        <td>${clienteF.value}</td>
        <td>${clienteP.value}</td>
    </tr>
    `
    clientes.push(new Clientes(clientesN.value, clientesA.value, clientesF.value, clientesP.value))
    localStorage.setItem('Cliente', JSON.stringify(clientes))
    document.querySelector('#formularioClientes').reset()
    toastify('Cliente agregado')
})
//Agregar valores a la tabla de proveedores
document.querySelector('#formularioProveedores').addEventListener('submit', (e) => {
    e.preventDefault()
    proveedores.push(new Proveedores(proveedoresN.value, proveedoresU.value, proveedoresT.value))
    localStorage.setItem('Proveedor', JSON.stringify(proveedores))
    document.querySelector('#formularioProveedores').reset()
    toastify('Proveedor agregado')
})
//Agregar valores a la tabla de vinos blancos
document.querySelector('#formularioProductosB').addEventListener('submit', (e) => {
    e.preventDefault()
    vinosBlancos.push(new Productos(productosNB.value, productosPB.value, productosSB.value))
    localStorage.setItem('Vino Blanco', JSON.stringify(vinosBlancos))
    document.querySelector('#formularioProductosB').reset()
    toastify('Producto agregado')
})
//Agregar valores a la tabla de vinos espumosos
document.querySelector('#formularioProductosE').addEventListener('submit', (e) => {
    e.preventDefault()
    vinosEspumosos.push(new Productos(productosNE.value, productosPE.value, productosSE.value))
    localStorage.setItem('Vino Espumoso', JSON.stringify(vinosEspumosos))
    document.querySelector('#formularioProductosE').reset()
    toastify('Producto agregado')
})
//Agregar valores a la tabla de vinos tintos
document.querySelector('#formularioProductosT').addEventListener('submit', (e) => {
    e.preventDefault()
    vinosTintos.push(new Productos(productosNT.value, productosPT.value, productosST.value))
    localStorage.setItem('Vino Tinto', JSON.stringify(vinosTintos));
    document.querySelector('#formularioProductosT').reset()
    toastify('Producto agregado')
})

//Agregar valores del localStorage a la tabla de clientes
JSON.parse(localStorage.getItem('Cliente')).forEach(cliente => {
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
JSON.parse(localStorage.getItem('Proveedor')).forEach(proveedor => {
    document.querySelector('#tablaProveedores').innerHTML += `
    <tr>
        <td>${proveedor.nombre}</td>
        <td>${proveedor.ubicacion}</td>
        <td>${proveedor.tipo}</td>
    </tr>
    `
})
//Agregar valores del localStorage a la tabla de vinos blancos
JSON.parse(localStorage.getItem('Vino Blanco')).forEach(vinoB => {
    document.querySelector('#tablaProductosB').innerHTML += `
    <tr>
        <td>${vinoB.nombre}</td>
        <td>${vinoB.precio}</td>
        <td>${vinoB.stock}</td>
    </tr>
    `
})
//Agregar valores del localStorage a la tabla de vinos espumosos
JSON.parse(localStorage.getItem('Vino Espumoso')).forEach(vinoE => {
    document.querySelector('#tablaProductosE').innerHTML += `
    <tr>
        <td>${vinoE.nombre}</td>
        <td>${vinoE.precio}</td>
        <td>${vinoE.stock}</td>
    </tr>
    `
})
//Agregar valores del localStorage a la tabla de vinos tintos
JSON.parse(localStorage.getItem('Vino Tinto')).forEach(vinoT => {
    document.querySelector('#tablaProductosT').innerHTML += `
    <tr>
        <td>${vinoT.nombre}</td>
        <td>${vinoT.precio}</td>
        <td>${vinoT.stock}</td>
    </tr>
    `
})



