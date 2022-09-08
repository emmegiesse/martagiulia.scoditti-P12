import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
`;

const SideBar = styled.div`
`;

const IconLink = styled(NavLink)`
`;

const Copyright = styled.p`
`;

export default function IconBar() {
	return (
        <Nav>
          <SideBar>
            <IconLink to='#'><img src="/assets/iconMeditation.svg" alt='Meditation' /></IconLink>
            <IconLink to='#'><img src="/assets/iconSwimming.svg" alt='Swimming' /></IconLink>
            <IconLink to='#'><img src="/assets/iconBike.svg" alt='Bike' /></IconLink>
            <IconLink to='#'><img src="/assets/iconDumbBell.svg" alt='Dumbell' /></IconLink>
          </SideBar>
          <Copyright>Copyright, SportSee 2020</Copyright>
        </Nav>
    );
}
        