(function(){

    let elBoite__modale;
    let elBoite__x;

    function creerBoiteModale() {
        elBoite__modale = document.createElement('div');
        elBoite__x = document.createElement('button');

        elBoite__modale.appendChild(elBoite__x);
        elBoite__x.classList.add('boite__x');
        elBoite__x.innerHTML = 'X';

        elBoite__modale.classList.add('boite__modale');
        let elBody = document.querySelector('body');
        elBody.appendChild(elBoite__modale);
    }
    
    creerBoiteModale();

    // document.querySelector('.boite__modale');

    let elBtn = document.querySelector('#mon_bouton');
    elBtn.addEventListener('mousedown', function() {

        console.log('Bravo le script fonctionne ... KEKW');
        elBoite__modale.classList.add('boite__modale__ouvrir');

    });

    elBoite__x.addEventListener('mousedown', function() {

        elBoite__modale.classList.remove('boite__modale__ouvrir');

    });

})()