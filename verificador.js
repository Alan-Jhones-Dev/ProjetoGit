function verificar() {
    var agora = new Date();
    var ano = agora.getFullYear();
    var num = document.getElementById('numero');
    var res = document.getElementById('res');

    if (num.value.length === 0 || num.value > ano) {
        alert('[ERROR] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('sexo');
        var idade = ano - Number(num.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

    } if (fsex[0].checked) {
        genero = 'Homem'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`

        if (idade >= 0 && idade <= 12) {
            //criança
            img.setAttribute('src', 'menino.png')
        }

        if (idade <= 25) {
            //jovem
            img.setAttribute('src', 'homem.png')
        }

        if (idade <= 50) {
            //adulto
            img.setAttribute('src', 'homem.png')
        }

        else {
            //idoso
            img.setAttribute('src', 'idoso.webp')
        }

    } else if (fsex[1].checked) {
        genero = 'Mulher'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`

        if (idade >= 0 && idade <= 12) {
            //criança
            img.setAttribute('src', 'menina.png');
        }

        if (idade <= 25) {
            //jovem
            img.setAttribute('src', 'mulher.png');
        }

        if (idade <= 50) {
            //adulta
            img.setAttribute('src', 'mulher.png')
        }
    } else {
        //idosa
        img.setAttribute('src', 'idosa.png')
    }

    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    img.style.width = ' 100'
}