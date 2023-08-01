function aleatorio(min, max, rounds){
    let npc = []
    for(let i = 0; i < rounds; i++){
        npc[i] = Math.floor(Math.random() * (max - min + 1) + min)
    }
    return npc
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
let pc = []
let jugador = []
let rondas = parseInt(prompt('Cantidad de rondas a jugar'))

for(let i = 0; i < rondas; i++){
    jugador[i] = parseInt(prompt('Elegí 1 para Piedra; 2 para Papel; 3 para Tijeras'))
}

pc = aleatorio(1, 3, rondas)

for(let i = 0; i < rondas; i++){
    // Alerta de opción elegida por el usuario y la pc
    mostrar(jugador[i], 'USUARIO')
    mostrar(pc[i], 'PC')
    
    // Combate
    combate(pc[i], jugador[i])
}