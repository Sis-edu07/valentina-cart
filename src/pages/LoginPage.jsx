import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/peticion.css';

export const LoginPage = () => {
	const navigate = useNavigate();

	const onLogin = e => {
		e.preventDefault();

		navigate('/dashboard', {
			replace: true,
			state: {
				logged: true,
				name,
			},
		});

		onResetForm();
	};

	const MoverBtn = () => {
		const contenido = document.querySelector('.wrapper');
		const btnPosponer = document.querySelector('.btnPosponer');
		const wrapperReact = contenido.getBoundingClientRect();
		const noBtnReact = btnPosponer.getBoundingClientRect();  
	  
		const i = Math.floor(Math.random() * (wrapperReact.width - noBtnReact.width)) + 1;
		const j = Math.floor(Math.random() * (wrapperReact.height - noBtnReact.height)) + 1;
	  
		btnPosponer.style.left = i + 'px';
		btnPosponer.style.top = j + 'px';
	  
	  }

	return (
		<div className='wrapper'>
			<div className='triangulo'></div>
			 <div class="heart">
				<p><br/><br/><br/>La espera puede ser dolorosa pero el recuentro sera la mayor celebracion de amor  <br/> Todos Tenemos un destino y tu eres el mio ❤️✨</p>
			</div>
			<br/>
			<br/>
			<h2 className='textquestion'>Al abrir la carta acepteras una Salida de San valentin ¿Deseas abrirla ?</h2>
			<div className='btn-grup'>                 
				<form onSubmit={onLogin}>
					<button className='btnEntrar'>Si Abrir Carta</button>
				</form>
				<form onMouseMove={MoverBtn}>
					<button className='btnPosponer' >Posponer</button>
				</form>
			</div>
		</div>
	);
};
