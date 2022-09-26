import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function IconBar() {
    return (
        <Container>
            <Nav>
                <SideBar>
                    <NavLink to='#'>
                        <img src="/assets/iconMeditation.svg" alt='Meditation' />
                    </NavLink>
                    <NavLink to='#'>
                        <img src="/assets/iconSwimming.svg" alt='Swimming' />
                    </NavLink>
                    <NavLink to='#'>
                        <img src="/assets/iconBike.svg" alt='Bike' />
                    </NavLink>
                    <NavLink to='#'>
                        <img src="/assets/iconDumbell.svg" alt='Dumbell' />
                    </NavLink>
                </SideBar>
                <Copyright>Copyright, SportSee 2020</Copyright>
            </Nav>
        </Container>
    );
}

const Container = styled.div`
    overflow: hidden;
    position: relative;
`;

const Nav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 117px;
    height: 100vh;
    background: #020203;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
`;

const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 64px;
    position: absolute;
    top: 30%;
    left: 26px;
    a {
        display: flex;
        height: 64px;
        width: 64px;
        margin-bottom: 20px;
    }
`;

const Copyright = styled.p`
    writing-mode: vertical-lr;
    text-orientation: mixed;
    transform: rotate(180deg);
    position: absolute;
    bottom: 59px;
    left: 42px;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    color: white;
    margin: auto;
`;
