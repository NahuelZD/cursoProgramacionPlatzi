function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function mostrar(player, str){
    switch (player) {
        case 1:
            alert(`${str} eligió Piedra`)
            break;
        case 2:
            alert(`${str} eligió Papel`)
            break;
        case 3:
            alert(`${str} eligió Tijeras`)
            break;
        default:
            alert(`${str} eligió PERDER !!!!`)
            break;
    }
}

function combate(npc, user){
    if(npc == user){
        alert('EMPATE')
    } else if(user == 1 && npc == 3){
        alert('GANASTE')
    } else if(user == 2 && npc == 1){
        alert('GANASTE')
    } else if(user == 3 && npc == 2){
        alert('GANASTE')
    } else {
        alert('PERDISTE')
    }
}

// Elección
let pc = aleatorio(1, 3)
let jugador = parseInt(prompt('Elige 1 para Piedra; 2 para Papel; 3 para Tijeras !'))

// Alerta de opción elegida por el usuario y la pc
mostrar(jugador, 'USUARIO')
mostrar(pc, 'PC')

// Combate
combate(pc, jugador)