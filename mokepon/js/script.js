window.addEventListener('load', () => {
    let botonMascotaJugador = document.getElementById('boton-mascota')

    let btnFuego = document.getElementById('boton-fuego')
    let btnAgua = document.getElementById('boton-agua')
    let btnTierra = document.getElementById('boton-tierra')

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
        crearMensaje()
    })
    btnAgua.addEventListener('click', () => {
        ataqueJugador = 'AGUA'
        ataqueEnemigo = ataqueAleatorioEnemigo()
        crearMensaje()
    })
    btnTierra.addEventListener('click', () => {
        ataqueJugador = 'TIERRA'
        ataqueEnemigo = ataqueAleatorioEnemigo()
        crearMensaje()
    })


})


let ataqueJugador
let ataqueEnemigo
let mensajes = document.getElementById('mensajes')

function crearMensaje() {
    let parrafo = document.createElement('p')
    parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador}; La mascota del enemigo atacó con ${ataqueEnemigo} - PENDIENTE 🎉`
    mensajes.appendChild(parrafo)
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    switch (ataqueAleatorio) {
        case 1:
            return 'FUEGO'
        case 2:
            return 'AGUA'
        case 3:
            return 'TIERRA'
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