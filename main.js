let user =+ prompt("piedra pale o tijeras \nCuantas veces quiere jugar?");
let choise
if (user>0) {
    choise =+ prompt("Escoja su opcion: \n1.Piedra \n2.Papel \n3.Tijera");
}else{
    user =window.alert("No quiere jugar. Chao")
}
// switch (user) {
//     case user>0:
//         let choise =+ prompt("Escoja su opcion: \n1.Piedra \n2.Papel \n3.Tijera");
//         break;

//     default:
//         user =window.alert("No quiere jugar. Chao");
//         break;
// 
//  "1" = Piedra      "2" = Papel     "3" = Tijera
// if (choise == 1) {
//     pc = Math.floor(Math.random()*3+1);
//     switch (pc) {
//         case 1:
//             user = alert("empate");
//             break;
//         case 2:
//             user = alert("Ganaste");
//         case 3 : 
//             user = alert("perdiste");
//         default:
//             break;
//     }
    
// }
let win =0
let winpc=0
let ties=0
switch (choise) {
    case 1:  // piedra
        pc = Math.floor(Math.random()*3+1);
        switch (pc) {
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
    user -=1;
        break;
    case 2: // papel
        pc = Math.floor(Math.random()*3+1);
    switch (pc) {
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
    user -=1;
        break;
    case 3: // tijera
        pc = Math.floor(Math.random()*3+1);
        switch (pc) {
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
    user -=1;
        break;
    
    default:
        break;
} 
while (user>0) {
    choise =+ prompt("Escoja su opcion: \n1.Piedra \n2.Papel \n3.Tijera");
    switch (choise) {
        case 1:  // piedra
            pc = Math.floor(Math.random()*3+1);
            switch (pc) {
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
        user -=1;
            break;
        case 2: // papel
            pc = Math.floor(Math.random()*3+1);
        switch (pc) {
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
        user -=1;
            break;
        case 3: // tijera
            pc = Math.floor(Math.random()*3+1);
            switch (pc) {
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
        user -=1;
            break;
        
        default:
            break;
    } 
}

 user = alert("la maquina gano:  "+winpc+"\nUsted gano:   "+win+"\nEmpates:   "+ties);
// while (user>0) {
//     choise = prompt("Escoja su opcion: \n1.Piedra \n2.Papel \n3.Tijera");
//     switch (choise) {
//         case 1:
            
//         pc = Math.floor(Math.random()*3+1)
//         user = alert(pc)
//         user =-1
//             break;
//         case 2:
//             break;
//         case 3:
//             break;
        
//         default:

//             break;
//     } 
    
// }
