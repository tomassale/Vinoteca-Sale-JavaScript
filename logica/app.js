//clases constructoras
class Clientes{
    constructor(nombre, apellido, frecuencia, preferencia){
        this.id = Math.floor(Math.random() * 100000);
        this.nombre = nombre;
        this.apellido = apellido;
        this.frecuencia = frecuencia;
        this.preferencia = preferencia; 
    }
}
class Proveedores{
    constructor(nombre, ubicacion, tipo){
        this.id = Math.floor(Math.random() * 100000);
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.tipo = tipo;
    }
}
class Productos{
    constructor(nombre, precio, stock){
        this.id = Math.floor(Math.random() * 100000);
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
const preguntas = [
    'Clientes',
    'Proveedores',
    'Vinos Tintos',
    'Vinos Blancos',
    'Vinos Espumosos'
]

//funcion Toastify
const toastify = (mensaje) => {
    Toastify({
        text: mensaje + ' agregado',
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

//funciones buscador
const buscarProductos = () =>{
    let input = document.querySelector('#buscador')
    let link = document.querySelector('#linkBuscador')
    switch(input.value){
    case 'Vinos Tintos':
        link.setAttribute('href', '#productos')
        break
    case 'Vinos Blancos':
        link.setAttribute('href', '#btnProductosT')
        break
    case 'Vinos Espumosos':
        link.setAttribute('href', '#btnProductosB')
        break
    default:
        link.setAttribute('href', '#')
        document.querySelector('#dropDown').innerHTML = ''
        break
    }
}
const buscar = () => {
    let input = document.querySelector('#buscador')
    let link = document.querySelector('#linkBuscador')
    if(input.value == 'Clientes'){
            link.setAttribute('href', '#buscador')
    }else if(input.value == 'Proveedores')
            link.setAttribute('href', '#btnClientes')
    else{
        buscarProductos()
    }
    document.querySelector('#buscador').value = ''
}
const esconderDropDown = () => {
    document.querySelectorAll('.itemDropDown').forEach(item => {
        item.addEventListener('click', (e) => {
            document.querySelector('#buscador').value = e.target.innerHTML
            document.querySelector('#dropDown').innerHTML = ''
        })
    })
}
const autocompletado = () => {
    document.querySelector("#dropDown").innerHTML = ''
    let pal = document.querySelector('#buscador').value
    let tam = pal.length
    for(let indice in preguntas){
        let nombre = preguntas[indice]
        let long = nombre.length
        let str = nombre.substring(0,tam)
        if(tam <= long && tam != 0){
            if(pal.toLowerCase() == str.toLowerCase()){
                let node = document.createElement("button")
                node.setAttribute('class', 'itemDropDown')
                let textnode = document.createTextNode(preguntas[indice])
                node.appendChild(textnode)
                document.querySelector('#dropDown').appendChild(node)
            }
        }
    }
    esconderDropDown()
}

//creador de array en localStorage
const crearLS = (valor, _array) => {
    if(localStorage.getItem(valor)){
        _array = JSON.parse(localStorage.getItem(valor))
    }else{
        localStorage.setItem(valor, JSON.stringify(_array))
    }
}

//creador de lineas en tabla
const JSONcliente = (item, tabla) => {
    JSON.parse(localStorage.getItem(item)).forEach(cliente => {
        document.querySelector(tabla).innerHTML += `
        <tr>
            <td>${cliente.nombre}</td>
            <td>${cliente.apellido}</td>
            <td>${cliente.frecuencia}</td>
            <td>${cliente.preferencia}</td>
            <td><button class='eliminar'>X</button></td>
        </tr>
        `
    })
}
const JSONproveedores = (item, tabla) => {
    JSON.parse(localStorage.getItem(item)).forEach(proveedor => {
        document.querySelector(tabla).innerHTML += `
        <tr>
            <td>${proveedor.nombre}</td>
            <td>${proveedor.ubicacion}</td>
            <td>${proveedor.tipo}</td>
            <td><button class='eliminar'>X</button></td>
        </tr>
        `
    })
}
const JSONproductos = (item, tabla) => {
    JSON.parse(localStorage.getItem(item)).forEach(object => {
        document.querySelector(tabla).innerHTML += `
        <tr>
            <td>${object.nombre}</td>
            <td>${object.precio}</td>
            <td>${object.stock}</td>
            <td><button class='eliminar'>X</button></td>
        </tr>
        `
    })
}

const eliminar = () => {
    document.querySelectorAll('.eliminar').forEach(e => {
        e.addEventListener('click', (t) => {
            t.target.parentElement.parentElement.remove()
        })
    })
}

//fetchs parar traer APIs o json
fetch('../logica/app.json')
    .then(res => res.json())
    .then(({cliente, proveedor}) => {
        cliente.forEach(object => {
            let {nombre, apellido, frecuencia, preferencia} = object
            clientes.push(new Clientes(nombre, apellido, frecuencia, preferencia))
        })
        proveedor.forEach(object => {
            let {nombre, ubicacion, tipo} = object
            proveedores.push(new Proveedores(nombre, ubicacion, tipo))
        })
        crearLS('Cliente', clientes)
        crearLS('Proveedor', proveedores)
    })
fetch('https://mocki.io/v1/31b7c89e-b301-4bfd-8112-6d90e8fc0023')
    .then(res => res.json())
    .then(({productos}) => {
        productos.forEach(object => {
            let {vinoTinto, vinoBlanco, vinoEspumoso} = object
            vinoTinto.forEach(Tinto => {
                let {nombre, precio, stock} = Tinto
                vinosTintos.push(new Productos(nombre, precio, stock))
            })
            vinoBlanco.forEach(Blanco => {
                let {nombre, precio, stock} = Blanco
                vinosBlancos.push(new Productos(nombre, precio, stock))
            })
            vinoEspumoso.forEach(Espumoso => {
                let {nombre, precio, stock} = Espumoso
                vinosEspumosos.push(new Productos(nombre, precio, stock))
            })
        })
        crearLS('Vino Tinto', vinosTintos)
        crearLS('Vino Blanco', vinosBlancos)
        crearLS('Vino Espumoso', vinosEspumosos)
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

//EventListeners
document.querySelector('#btnBuscador').addEventListener('click', buscar)
document.querySelector('#buscador').addEventListener('keyup', autocompletado)

//Agregar valores a las tablas
document.querySelector('#formularioClientes').addEventListener('submit', (e) => {
    e.preventDefault()
    document.querySelector('#tablaClientes').innerHTML += `
    <tr>
        <td>${clientesN.value}</td>
        <td>${clientesA.value}</td>
        <td>${clientesF.value}</td>
        <td>${clientesP.value}</td>
        <td><button class='eliminar'>X</button></td>
    </tr>
    `
    clientes.push(new Clientes(clientesN.value, clientesA.value, clientesF.value, clientesP.value))
    localStorage.setItem('Cliente', JSON.stringify(clientes))
    document.querySelector('#formularioClientes').reset()
    toastify('Cliente')
})
document.querySelector('#formularioProveedores').addEventListener('submit', (e) => {
    e.preventDefault()
    document.querySelector('#tablaProveedores').innerHTML += `
    <tr>
        <td>${proveedoresN.value}</td>
        <td>${proveedoresU.value}</td>
        <td>${proveedoresT.value}</td>
        <td><button class='eliminar'>X</button></td>
    </tr>
    `
    proveedores.push(new Proveedores(proveedoresN.value, proveedoresU.value, proveedoresT.value))
    localStorage.setItem('Proveedor', JSON.stringify(proveedores))
    document.querySelector('#formularioProveedores').reset()
    toastify('Proveedor')
})
document.querySelector('#formularioProductosT').addEventListener('submit', (e) => {
    e.preventDefault()
    document.querySelector('#tablaProductosT').innerHTML += `
    <tr>
        <td>${productosNT.value}</td>
        <td>${productosPT.value}</td>
        <td>${productosST.value}</td>
        <td><button class='eliminar'>X</button></td>
    </tr>
    `
    vinosTintos.push(new Productos(productosNT.value, productosPT.value, productosST.value))
    localStorage.setItem('Vino Tinto', JSON.stringify(vinosTintos));
    reinicio('#formularioProductosT')
    toastify('Producto')
})
document.querySelector('#formularioProductosB').addEventListener('submit', (e) => {
    e.preventDefault()
    document.querySelector('#tablaProductosB').innerHTML += `
    <tr>
        <td>${productosNB.value}</td>
        <td>${productosPB.value}</td>
        <td>${productosSB.value}</td>
        <td><button class='eliminar'>X</button></td>
    </tr>
    `
    vinosBlancos.push(new Productos(productosNB.value, productosPB.value, productosSB.value))
    localStorage.setItem('Vino Blanco', JSON.stringify(vinosBlancos))
    document.querySelector('#formularioProductosB').reset()
    toastify('Producto')
})
document.querySelector('#formularioProductosE').addEventListener('submit', (e) => {
    e.preventDefault()
    document.querySelector('#tablaProductosE').innerHTML += `
    <tr>
        <td>${productosNE.value}</td>
        <td>${productosPE.value}</td>
        <td>${productosSE.value}</td>
        <td><button class='eliminar'>X</button></td>
    </tr>
    `
    vinosEspumosos.push(new Productos(productosNE.value, productosPE.value, productosSE.value))
    localStorage.setItem('Vino Espumoso', JSON.stringify(vinosEspumosos))
    document.querySelector('#formularioProductosE').reset()
    toastify('Producto')
})

//ejecucion de funciones
crearLS('Cliente', clientes)
crearLS('Proveedor', proveedores)
crearLS('Vino Blanco', vinosBlancos)
crearLS('Vino Espumoso', vinosEspumosos)
crearLS('Vino Tinto', vinosTintos)
JSONcliente('Cliente', '#tablaClientes')
JSONproveedores('Proveedor', '#tablaProveedores')
JSONproductos('Vino Tinto', '#tablaProductosT')
JSONproductos('Vino Blanco', '#tablaProductosB')
JSONproductos('Vino Espumoso', '#tablaProductosE')
eliminar()