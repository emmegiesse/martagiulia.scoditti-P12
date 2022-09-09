import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  display : block
`;

const SideBar = styled.div`
  display : block
`;

const IconLink = styled(NavLink)`
  display : block
`;

const Copyright = styled.p`
  display : block 
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
        