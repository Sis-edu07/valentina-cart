import React from 'react';
import '../pages/css/inicio.css'; 
import img1 from './../img/inicio1.jpg';
import img2 from './../img/inicio2.jpg';
import img3 from './../img/inicio3.jpg';
import img4 from './../img/inicio4.jpg';


export const HomePage = () => {
  return (
    <>
      <div className='contenedor'>
        <div className='encabezado-container'> 
          <div id="brillo">¡Feliz Día de San Valentín! 💞</div>
        </div>
        <br/>
        <br/>
        <div className='galeria'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
      </div>
    </>
  )
}
