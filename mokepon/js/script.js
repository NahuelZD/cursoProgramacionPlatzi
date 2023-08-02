window.addEventListener('load', () => {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', () => {
        if(document.getElementById('hipodoge').checked) alert('Elegiste HIPODOGE')
        else if(document.getElementById('capipepo').checked) alert('Elegiste CAPIPEPO')
        else if(document.getElementById('ratigueya').checked) alert('Elegiste RATIGUEYA')
        else if(document.getElementById('langostelvis').checked) alert('Elegiste LANGOSTELVIS')
        else if(document.getElementById('tucapalma').checked) alert('Elegiste TUCAPALMA')
        else if(document.getElementById('pydos').checked) alert('Elegiste PYDOS')
        else alert('Debes seleccionar una mascota')
    })
})