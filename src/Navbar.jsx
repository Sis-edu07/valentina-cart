import React from 'react';
import love from './img/love.png';
import {
	Link,
	Outlet,
	useLocation,
	useNavigate,
} from 'react-router-dom';

export const Navbar = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	console.log(state);

	const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	};
	const onLogout2 = () => {
		navigate('/register', {
			replace: true,
		});
	};

	return (
		<>
			<header>
				<h1>
					<Link to='/'> 
						<img className='love' src={love} alt="love" />
						love
					</Link>
				</h1>

				{state?.logged ? (
					<div className='user'>
						<span className='username'>{state?.name}</span>
						<button className='btn-logout' onClick={onLogout2}>
							Ver mas 💞
						</button>
					</div>
				) : (
					<nav>
						<Link to='/login'>Da clik aqui  💞-</Link>
					</nav>
				) }
			</header>

			<Outlet />
		</>
	);
};
