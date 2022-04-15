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