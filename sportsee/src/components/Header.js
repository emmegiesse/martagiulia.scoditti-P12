import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const CustomHeader = styled.header`
`;

const Nav = styled.nav`
`;

export default function Header() {
	return (
		<CustomHeader className='page-header'>
			<img src="/assets/logo.svg" alt='Logo SportSee' />
			<Nav>
				<NavLink to='#'>Accueil</NavLink>
				<NavLink to='#'>Profil</NavLink>
				<NavLink to='#'>Réglages</NavLink>
				<NavLink to='#'>Communauté</NavLink>
			</Nav>
		</CustomHeader>
	);
}
