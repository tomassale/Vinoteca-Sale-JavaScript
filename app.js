let mesas = Number(prompt("Cuantas mesas queres alquilar?"))

for(let i = 1; i <= mesas; i++ ){
    if (i == 14){
        console.log("la mesa 14 ya esta reservada")
    }else if(i == 19){
        console.log("la mesa 19 ya esta reservada")
    }else if(i > 80){
        console.log("no tenemos tantas mesas chinchulin")
    }else{
        console.log(`Estan disponibles las mesas ${i}`)
    }
}