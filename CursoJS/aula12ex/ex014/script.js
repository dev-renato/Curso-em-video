function carregar() {
    var data = new Date()
    var hora = document.getElementById('hora')
    var foto = document.getElementById('foto')


    hora.innerHTML = `São exatamente ${data.getHours()}h`

    if (data.getHours() >= 0 && data.getHours() < 12) {
        //bom dia
        foto.src = 'fotomanha.png'
        document.body.style.background = 'white'
    }else if (data.getHours() >= 12 && data.getHours() <= 18) {
        //boa tarde
        foto.src = 'fototarde.png'
        document.body.style.background = 'red'
    } else {
        //boa noite
        foto.src = 'fotonoite.png'
        document.body.style.background = 'yellow'
    }

    

    
}