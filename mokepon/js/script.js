window.addEventListener('load', () => {
    let botonMascotaJugador = document.getElementById('boton-mascota')

    let btnFuego = document.getElementById('boton-fuego')
    let btnAgua = document.getElementById('boton-agua')
    let btnPlanta = document.getElementById('boton-planta')

    let btnReiniciar = document.getElementById('reiniciar')

    botonMascotaJugador.addEventListener('click', () => {

        miMascota = document.getElementById('mi-mascota')

        if (document.getElementById('hipodoge').checked) {
            miMascota.innerText = 'HIPODOGE'
        }
        else if (document.getElementById('capipepo').checked) {
            miMascota.innerText = 'CAPIPEPO'
        }
        else if (document.getElementById('ratigueya').checked) {
            miMascota.innerText = 'RATIGUEYA'
        }
        else if (document.getElementById('langostelvis').checked) {
            miMascota.innerText = 'LANGOSTELVIS'
        }
        else if (document.getElementById('tucapalma').checked) {
            miMascota.innerText = 'TUCAPALMA'
        }
        else if (document.getElementById('pydos').checked) {
            miMascota.innerText = 'PYDOS'
        }
        else alert('Debes seleccionar una mascota')

        seleccionarMascotaEnemigo()
    })


    btnFuego.addEventListener('click', () => {
        ataqueJugador = 'FUEGO'
        ataqueEnemigo = ataqueAleatorioEnemigo()
        combate(ataqueJugador, ataqueEnemigo)

    })
    btnAgua.addEventListener('click', () => {
        ataqueJugador = 'AGUA'
        ataqueEnemigo = ataqueAleatorioEnemigo()
        combate(ataqueJugador, ataqueEnemigo)

    })
    btnPlanta.addEventListener('click', () => {
        ataqueJugador = 'PLANTA'
        ataqueEnemigo = ataqueAleatorioEnemigo()
        combate(ataqueJugador, ataqueEnemigo)

    })

    btnReiniciar.addEventListener('click', () => location.reload())


})


let ataqueJugador
let ataqueEnemigo
let hpJugador = 5
let hpEnemigo = 5
let mensajes = document.getElementById('mensajes')

function crearMensaje(resultado) {
    let parrafo = document.createElement('p')
    parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador}; La mascota del enemigo atacó con ${ataqueEnemigo} - ${resultado}`
    mensajes.appendChild(parrafo)
}

function crearMensajeFinal(mensajeFinal) {
    let parrafo = document.createElement('p')
    parrafo.innerHTML = mensajeFinal
    mensajes.appendChild(parrafo)
    document.getElementById('boton-fuego').disabled = true
    document.getElementById('boton-agua').disabled = true
    document.getElementById('boton-planta').disabled = true
}

function combate(jugador, npc) {
    let spanHpJugador = document.getElementById('hp-jugador')
    let spanHpEnemigo = document.getElementById('hp-enemigo')

    if (jugador == npc) {
        crearMensaje('EMPATE')
    } else if ((jugador == 'PLANTA' && npc == 'AGUA') || (jugador == 'AGUA' && npc == 'FUEGO') || (jugador == 'FUEGO' && npc == 'PLANTA')) {
        hpEnemigo--
        spanHpEnemigo.innerText = hpEnemigo
        crearMensaje('LA MASCOTA DEL ENEMIGO PIERDE UNA VIDA')
    } else {
        hpJugador--
        spanHpJugador.innerText = hpJugador
        crearMensaje('TU MASCOTA PIERDE UNA VIDA')
    }

    revisarVidas()

}

function revisarVidas() {
    if (hpEnemigo == 0) crearMensajeFinal('LA MASCOTA DEL ENEMIGO MURIÓ')
    else if (hpJugador == 0) crearMensajeFinal('TU MASCOTA MURIÓ')
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    switch (ataqueAleatorio) {
        case 1:
            return 'FUEGO'
        case 2:
            return 'AGUA'
        case 3:
            return 'PLANTA'
    }
}

function seleccionarMascotaEnemigo() {
    let random = aleatorio(1, 6)
    let enemigo = document.getElementById('mascota-enemiga')
    switch (random) {
        case 1:
            enemigo.innerText = 'HIPODOGE'
            break;
        case 2:
            enemigo.innerText = 'CAPIPEPO'
            break;
        case 3:
            enemigo.innerText = 'RATIGUEYA'
            break;
        case 4:
            enemigo.innerText = 'LANGOSTELVIS'
            break;
        case 5:
            enemigo.innerText = 'TUCAPALMA'
            break;
        case 6:
            enemigo.innerText = 'PYDOS'
            break;
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}