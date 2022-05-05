//constructor
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
class Clientes{
    constructor(nombre, apellido, frecuencia, preferencia){
        this.nombre = nombre;
        this.apellido = apellido;
        this.frecuencia = frecuencia;
        this.preferencia = preferencia; 
    }
}
//arrays
const mostrarProveedor = []
const mostrarClientes = []
const vinosBlancos = []
const vinosEspumosos = []
const vinosTintos = []

//agregar clientes
mostrarClientes.push(new Clientes("Nicolas", "Doblas", "moderado", "Vinos Tintos"))
mostrarClientes.push(new Clientes("Juan", "Perez", "frecuente", "Vinos Blancos"))
mostrarClientes.push(new Clientes("Tomás", "Campos", "nula", "Vinos Blancos"))
mostrarClientes.push(new Clientes("Nahuel", "Saavedra", "moderado", "Vinos Espumosos"))
mostrarClientes.push(new Clientes("Nahuel", "Zambito", "frecuente", "Vinos Tintos"))
mostrarClientes.push(new Clientes("Julian", "Rodriguez", "moderado", "Vinos Espumosos"))
mostrarClientes.push(new Clientes("Paula", "Birocco", "nula", "Vinos Blancos"))
mostrarClientes.push(new Clientes("Malena", "Gomez", "nula", "Vinos Espumosos"))
mostrarClientes.push(new Clientes("Carlos", "Juarez", "frecuente", "Vinos Blancos"))
mostrarClientes.push(new Clientes("Alejo", "Fernandez", "regular", "Vinos Tintos"))
mostrarClientes.push(new Clientes("Tomás", "Sale", "moderado", "Vinos Espumosos"))
//agregar proveedores
mostrarProveedor.push(new Proveedores("Salamanca S.A.", "Lanus", "A"))
mostrarProveedor.push(new Proveedores("Fremua S.A.", "La paz", "C"))
mostrarProveedor.push(new Proveedores('Saavedra S.R.L.', "Belgrano", "B"))
mostrarProveedor.push(new Proveedores("Fernandez S.A.", "San Bernardo", "A"))
mostrarProveedor.push(new Proveedores("Zuviria S.R.L.", "Caballito", "A"))
mostrarProveedor.push(new Proveedores("Saladillo S.A.", "Ramos Mejia", "C"))
//agregar productos
vinosBlancos.push(new Productos("Dulce Dilema", 3100, 214))
vinosBlancos.push(new Productos("Putruele Tardío De Abril", 1500, 230))
vinosEspumosos.push(new Productos("Champagne Baron B Extra Brut", 7000, 40))
vinosEspumosos.push(new Productos("Espumante Freixenet Italian Rose Sparkling", 4000, 20))
vinosEspumosos.push(new Productos("Champagne Brut Ros", 5000, 40))
vinosTintos.push(new Productos("Salientein", 2100, 250))
vinosTintos.push(new Productos("Marío Blanco", 2100, 100))
vinosTintos.push(new Productos("Rutini Vin Doux Naturel", 1400, 70))
vinosTintos.push(new Productos("Norton Rosado Malbec", 1600, 50))
vinosTintos.push(new Productos("Dada 7 Finca Las Moras", 1700, 40))
vinosTintos.push(new Productos("Lambrusco Rosso Amabile", 1900, 54))
vinosTintos.push(new Productos("Don Valentin", 4000, 26))

//pregunta de busqueda
const pregunta = () =>{
    let preguntar = prompt("¿Que estas buscando?")
    switch(preguntar){
        case "productos":
            mostrarLista();
            break
        case "proveedores":
            console.log(mostrarProveedor);
            break
        case "clientes":
            console.log(mostrarClientes);
            break
        default:
            alert("No se encuentra lo que busca")
            break
    }
}
//filtro de productos
const mostrarLista = () => {
    let buscarLista = prompt("¿Que lista desea buscar?");
    switch(buscarLista){
        case "vinos tintos":
            console.log(vinosTintos);
            ordenarT();
            break
        case "vinos espumosos":
            console.log(vinosEspumosos);
            ordenarE();
            break
        case "vinos blancos":
            console.log(vinosBlancos);
            ordenarB();
            break
        default:
            alert("No se escuentra la lista que busca");
    }
}
//orden de vinos blancos por precio
const ordenarB = () =>{
    vinosBlancos.sort((a,b) => {
        if (a.Productos > b.precio){
            return 1
        }
        else if (a.precio < b.precio) {
            return -1
        }
        else{
            return 0
        }
    })
}
//orden de vinos espumosos por precio
const ordenarE = () =>{
    vinosEspumosos.sort((a,b) => {
        if (a.Productos > b.precio){
            return 1
        }
        else if (a.precio < b.precio) {
            return -1
        }
        else{
            return 0
        }
    })
}
//orden de vinos tintos por precio
const ordenarT = () =>{
    vinosTintos.sort((a,b) => {
        if (a.Productos > b.precio){
            return 1
        }
        else if (a.precio < b.precio) {
            return -1
        }
        else{
            return 0
        }
    })
}
pregunta()

//Agregar valores a la tabla de clientes
document.querySelector("#btnClientes").addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector("#tablaClientes").innerHTML += `
    <tr>
        <td>${clientesN.value}</td>
        <td>${clientesA.value}</td>
        <td>${clientesF.value}</td>
        <td>${clientesP.value}</td>
    </tr>
    `
    document.querySelector("#formularioClientes").reset()
})

//Agregar valores a la tabla de proveedores
document.querySelector("#btnProveedores").addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector("#tablaProveedores").innerHTML += `
    <tr>
        <td>${proveedoresN.value}</td>
        <td>${proveedoresU.value}</td>
        <td>${proveedoresT.value}</td>
    </tr>
    `
    document.querySelector("#formularioProveedores").reset()
})

//Agregar valores a la tabla de vinos tintos
document.querySelector("#btnProductosB").addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector("#tablaProductosB").innerHTML += `
    <tr>
        <td>${productosNB.value}</td>
        <td>${productosPB.value}</td>
        <td>${productosSB.value}</td>
    </tr>
    `
    document.querySelector("#formularioProductosB").reset()
})

//Agregar valores a la tabla de vinos espumosos
document.querySelector("#btnProductosE").addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector("#tablaProductosE").innerHTML += `
    <tr>
        <td>${productosNE.value}</td>
        <td>${productosPE.value}</td>
        <td>${productosSE.value}</td>
    </tr>
    `
    document.querySelector("#formularioProductosE").reset()
})

//Agregar valores a la tabla de vinos tintos
document.querySelector("#btnProductosT").addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector("#tablaProductosT").innerHTML += `
    <tr>
        <td>${productosNT.value}</td>
        <td>${productosPT.value}</td>
        <td>${productosST.value}</td>
    </tr>
    `
    document.querySelector("#formularioProductosT").reset()
})