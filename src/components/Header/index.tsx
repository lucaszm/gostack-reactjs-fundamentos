import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container, NavItem } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const location = useLocation();

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <NavItem to="/" active={location.pathname === '/' ? 1 : 0}>
            Listagem
          </NavItem>
          <NavItem
            to="/import"
            active={location.pathname === '/import' ? 1 : 0}
          >
            Importar
          </NavItem>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
