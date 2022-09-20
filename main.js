let user =+ prompt("piedra pale o tijeras \nCuantas veces quiere jugar?");
let choise
if (user>0) {
    choise =+ prompt("Escoja su opcion: \n1.Piedra \n2.Papel \n3.Tijera");
}else{
    user =window.alert("No quiere jugar. Chao")
}

let win =0
let winpc=0
let ties=0
// Genera la opcion aleatoria de el pc
function pcchoise(){
    pc = Math.floor(Math.random()*3+1);
    return pc
}
// hace la operacion en caso de que el usuario escoja piedra
function casopiedra(){
    switch (pcchoise()) {
        case 1:
            vista = alert("empate");
            ties+=1;
            break;
        case 2:
            vista = alert("Perdiste");
            winpc +=1;
            break;
        case 3 : 
            vista = alert("Ganaste");
            win +=1;
            break;
        default:
            break;
    }
}
// hace la operacion en caso de que el usuario escoja papel
function casopapel() {
    switch (pcchoise()) {
        case 1:
            vista = alert("Ganaste");
            win +=1
            break;
        case 2:
            vista = alert("Empate");
            ties+=1;
            break;
        case 3 : 
            vista = alert("perdiste");
            winpc +=1
            break;
        default:
            break;
    }
}
// hace la operacion en caso de que el usuario escoja tijeras
function casotijeras() {
    switch (pcchoise()) {
        case 1:
            vista = alert("Persite");
            winpc +=1
            break;
        case 2:
            vista = alert("Ganaste");
            win +=1
            break;
        case 3 : 
            vista = alert("Empate");
            ties+=1;
            break;
        default:
            break;
    }
    
}
switch (choise) {
    case 1:  // piedra
        casopiedra();
    user -=1;
        break;
    case 2: // papel
        casopapel();
    
    user -=1;
        break;
    case 3: // tijera
        casotijeras();
    user -=1;
        break;
    
    default:
        break;
} 
while (user>0) {
    choise =+ prompt("Escoja su opcion: \n1.Piedra \n2.Papel \n3.Tijera");
    switch (choise) {
        case 1:  // piedra
        casopiedra();
    user -=1;
        break;
    case 2: // papel
        casopapel();
    
    user -=1;
        break;
    case 3: // tijera
        casotijeras();
    user -=1;
        break;
    
    default:
        break;
    } 
}

 user = alert("la maquina gano:  "+winpc+"\nUsted gano:   "+win+"\nEmpates:   "+ties);