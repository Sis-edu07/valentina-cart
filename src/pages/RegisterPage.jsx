import React, { useState } from 'react';
import '../../src/pages/css/carrusel.css';
import img1 from './../img/fin1.jpg';
import img2 from './../img/fin2.jpg';
import img3 from './../img/fin3.jpg';
import img4 from './../img/fin4.jpg';
import img5 from './../img/fin5.jpg';
import img6 from './../img/fin6.jpg'; 
import img7 from './../img/fin7.jpg'; 

export const RegisterPage = () => {
  // Use state to track the active image
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle click event for changing active image
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const images = [
    { src: img1, alt: "1", name: "FAMILIA", role: "Gracias por hacerme ver lo increible que es tener una familia" },
    { src: img2, alt: "2", name: "MAMÁ", role: "Eres una Mamá increible que hace su mayor esfuerzo" },
    { src: img3, alt: "3", name: "BELLESA", role: "Ojala pudieras ver como yo te veo y enteresas lo hermosa que eres." },
    { src: img4, alt: "4", name: "HIJA", role: "Tenemos una hermosa niña que nos a unido y ayudado a ser mejores" },
    { src: img5, alt: "5", name: "UNICA", role: "No se que hice para tenerte y ahora preciono todos los botones para recuperarte." },
    { src: img6, alt: "6", name: "AMOROSA", role: "Tus ojos reflejan un amor que quieres salir y voy hacer lo posible para que asi sea" },
	{ src: img7, alt: "7", name: "TRISTESA", role: "esta fue de las ultimas veces que celebramos 14 DE f, QUISIERA QUE RECUPEREMOS ESOS DIAS" },
  ];

  return (
	<div className='contenedorImg'>
		<section className="slider-container2">
		<div className="slider-images">
			{images.map((image, index) => (
			<div
				key={index}
				className={`slider-img ${activeIndex === index ? 'active' : ''}`}
				onClick={() => handleClick(index)}
			>
				<img className='imgC' src={image.src} alt={image.alt} />
				<h1 className='tituloC'>{image.name}</h1>
				<div className="details">
				<h2 className='subTituloC'>{image.name}</h2>
				<p>{image.role}</p>
				</div>
			</div>
			))}
		</div>
		</section>
		<div>
			<h3 className='textofin'>Sé que las cosas no han sido fáciles entre nosotros, pero aún creo que tenemos algo especial que vale la pena luchar. Me gustaría disculparme por mi parte en la ruptura y mostrar que he crecido desde entonces. ¿Podrías considerar darme otra oportunidad?
				
				. Sé que las cosas no pueden volver a ser como antes, pero ¿podríamos al menos intentar construir algo nuevo juntos? SER UNA FAMILIA UNIDA			</h3>
		</div>
	</div>
    
  );
};
