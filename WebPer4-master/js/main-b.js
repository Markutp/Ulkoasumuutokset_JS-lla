'use strict';

const loadJSON = (url, func) => {
  fetch(url).then((response) => {
    return response.json();
  }).then((json) => {
    func(json);
  });
};

const linkkiTapahtumat = () => {
  const linkit = document.querySelectorAll('ul a');


  // käy forEachillä linkit läpi
  linkit.forEach((linkki) => {
    linkki.addEventListener('click' ,(evt) => {
      evt.preventDefault();
      let reffi = linkki.getAttribute('href');
     let kuvanen = modal.querySelector('img');
     kuvanen.setAttribute('src', reffi);
     modal.classList.replace('hidden', 'lightbox');
    });

  })
  // lisää jokaiseen linkkiin click event
  // klikatessa hae linkin href-arvo ja laita se modalin img:n src arvoksi
  // vaihda modalin luokaksi lightbox hiddenin sijaan
};




const templateFunction = (json) => {
  let html = '';
  json.forEach((kuva) => {
    html += `<li>
            <figure>
                <a href="img/original/${kuva.mediaUrl}"><img src="img/thumbs/${kuva.mediaThumb}"></a>
                <figcaption>
                    <h3>${kuva.mediaTitle}</h3>
                </figcaption>
            </figure>
        </li>`;
  });
  const element = document.querySelector('ul');
  element.innerHTML = html;
  // linkit voi valita vasta tämän jälkeen, eli html on nyt valmis
  linkkiTapahtumat();
};

loadJSON('kuvat.json', templateFunction);

const suljeNappi = document.querySelector('.closeBtn');
const modal = document.querySelector('#modal');

suljeNappi.addEventListener('click', (evt) => {
  evt.preventDefault();
  // vaihda modalin luokka lightboxista hiddeniin
  modal.classList.replace('lightbox', 'hidden')
});