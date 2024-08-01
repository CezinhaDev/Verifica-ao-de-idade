function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
  
    if (fano.value.length == 0 || Number(fano.value) > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente!!!');
    } else {
      var fsex = document.getElementsByName('radsex');
      var idade = ano - Number(fano.value);
      var genero = '';
      var img = document.createElement('img');
      img.setAttribute('id', 'foto');
      img.style.width = '250px';
      img.style.height = '250px';
      img.style.borderRadius = '50%';
  
      if (fsex[0].checked) {
        genero = 'Homem';
        if (idade >= 0 && idade <= 10) {
          // criança
          img.setAttribute('src', 'bebe-homem.webp');
        } else if (idade < 21) {
          // jovem
          img.setAttribute('src', 'jovem-homem.webp');
        } else if (idade < 50) {
          // adulto
          img.setAttribute('src', 'homem-adulto.jpeg');
        } else {
          // idoso
          img.setAttribute('src', 'idoso-homem.webp');
        }
      } else if (fsex[1].checked) {
        genero = 'Mulher';
        if (idade >= 0 && idade < 10) {
          // criança
          img.setAttribute('src', 'bebe-mulher.webp');
        } else if (idade < 21) {
          // jovem
          img.setAttribute('src', 'jovem-mulher.jpeg');
        } else if (idade < 50) {
          // adulto
          img.setAttribute('src', 'mulher-adulta.webp');
        } else {
          // idosa
          img.setAttribute('src', 'idoso-mulher.jpeg');
        }
      }
      res.style.textAlign = 'center';
  
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
      res.appendChild(img);
    }
  }
  