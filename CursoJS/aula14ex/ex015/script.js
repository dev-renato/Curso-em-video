function verificador() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) >= ano){
        window.alert('Erro! Veririque os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //colocar a imagem. Mas eu nao queria ter que editar.
            } else if (idade < 21) {
                //colocar a imagem. Mas eu nao queria ter que editar.
            } else if (idade < 50) {
                //colocar a imagem. Mas eu nao queria ter que editar.
            } else {
                //colocar a imagem. Mas eu nao queria ter que editar.
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //colocar a imagem. Mas eu nao queria ter que editar.
            } else if (idade < 21) {
                //colocar a imagem. Mas eu nao queria ter que editar.
            } else if (idade < 50) {
                //colocar a imagem. Mas eu nao queria ter que editar.
            } else {
                //colocar a imagem. Mas eu nao queria ter que editar.    
            }
        }   
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }    
}