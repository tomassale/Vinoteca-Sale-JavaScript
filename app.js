//array
const vinosTintos = [
    "Malbec",
    "Tukma",
    "Animal",
    "Nicasia",
    "Rutini", 
    "El enemigo", 
    "San Huberto", 
    "Don Valentin",
    ]
const vinosEspumosos = [
    "Champagne Brut Ros",
    "Espumante Freixenet Italian Rose Sparkling",
    "Champagne Baron B Extra Brut",
    "Lambrusco Rosso Amabile",
    "Dada 7 Finca Las Moras",
    ]
const vinosDulces = [
    "Norton Rosado Malbec",
    "Rutini Vin Doux Naturel",
    "Putruele Tardío De Abril",
    "Dulce Dilema",
    "Marío Blanco",
    "Salientein",
    ]

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