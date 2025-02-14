import React from 'react';
import '../pages/css/carta.css';

import img1 from './../img/carta1.jpg';
import img2 from './../img/carta2.jpg';

export const DashboardPage = () => {
  const AccionCarta = (e) => {
    e.preventDefault(); // Prevent form submission

    const envelope = document.querySelector('.envelope');
    const tapRight = document.querySelector('.tap-right');
    const tapLeft = document.querySelector('.tap-left');
    const heartCart = document.querySelector('.heartCart');
    const letter = document.querySelector('.letter'); // Define letter element

    const clickableElements = [envelope, tapRight, tapLeft, heartCart];

    if (clickableElements.includes(e.target)) {
      envelope.classList.toggle('flap');
      
      if (!letter.classList.contains('opened')) {
        setTimeout(() => {
          letter.classList.add('letter-opening');

          setTimeout(() => {
            letter.classList.remove('letter-opening');
            letter.classList.add('opened');
          }, 500);
        }, 1000);
      }
    } else if (e.target.matches(".envelope *") ) {
      envelope.classList.remove('flap');
      if (letter.classList.contains("opened")) {
        letter.classList.add("closing-letter");
        setTimeout(() => {
          letter.classList.remove("closing-letter");
          letter.classList.remove("opened");
        }, 500);
      }
    }
  };

  return (
    <>
      <h1>¡FELIZ SAN VALENTIN!</h1>
      <div className="container">
        <div className="envelope-wrapper">
          <div className="envelope" onClick={AccionCarta} aria-label="Abrir sobre">
            <div className="letter">
              <div className="text">
                <strong>Querida Paty, Pato Hermosa (Anterirmente AMOR),</strong>
                <p>
                  Hoy es <strong>San Valentín</strong>, <br/>
                  Aunque la distancia nos separe, tu esencia sigue aqui, impregnado en cada rincon de mi alma que aun te extraña 
                  y apesar que todo el mundo dice que, cuando amas alguien, tienes que apredera a dejarlo ir pero.. ¿ Y si no quiero ?.<br/>
                  Fuiste mi primera vez en muchas cosas, tu eres ese tatuaje sin tinta que llevare tatutado en el alma. 
                  Tal vez yo no sepa donder ir pero si volviera una mañana abrir los ojos y ver los tuyos sabria donde quedarme.<br/><br/>
                  Se que no eh sido perfecto y en esta carta te pdio perdón, por No haber sido la mejor persona para ti. Perdon intente llamara mucho la atención
                  o si te presione demaciado. Siempre te voy <strong>Amar</strong> com la primera vez, te voy a mirar como la primera vez con los ojos iluminados como la primera vez que te conoci.

                </p>
              </div>
            </div>
          </div>
          <div className="heartCart" onClick={AccionCarta} aria-label="Corazón"></div>
          <div className="tap-right" onClick={AccionCarta} aria-label="Tocar derecha"></div>
          <div className="tap-left" onClick={AccionCarta} aria-label="Tocar izquierda"></div>
          
        </div>
        <div className='divImg1'><img className='imgcarta1' src={img1} /></div>
        <div className='divImg2'><img className='imgcarta2' src={img2} /></div>
      </div>
    </> 
  );
};
