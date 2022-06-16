(function(){

    let elboite__modale = document.createElement('div');
    elboite__modale.classList.add('boite__modale');
    let elBody = document.querySelector('body');
    elBody.appendChild(elboite__modale);

    // document.querySelector('.boite__modale');

    let elBtn = document.querySelector('#mon_bouton');
    elBtn.addEventListener('mousedown', function() {

        console.log('Bravo le script fonctionne ... KEKW');

    });

})()