function contar() {
    let msg = document.querySelector('div#msg');
    let img = document.getElementById('imagem')

    let date = new Date();
    let hour = date.getHours();
    // let hora = 22;

    msg.innerHTML = ('Now the time is: ' + hour + ' hours!');

    if (hour >= 0 && hour < 12) {
        img.src = 'fotomanha.jpg';
        document.body.style.background = '#e2cd9f'
    } else if (hour >= 12 && hour <= 18) {
        img.src = 'fototarde.jpg';
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'fotonoite.jpg';
        document.body.style.background = '#515154'
    }
}

