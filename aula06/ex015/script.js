function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano || fano.value < 1900){
        alert('[ERRO] Verifique os dados e tenta novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex [0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                // Crianca
                img.setAttribute('src', 'foto-bebeHomem.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src' ,'foto-jovemHomem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adultoHomem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idosoHomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // Crianca
                img.setAttribute('src', 'foto-bebeMulher.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovemMulher.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adultoMulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idosaMulher.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}