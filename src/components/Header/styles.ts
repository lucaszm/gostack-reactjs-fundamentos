import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ContainerProps {
  size?: 'small' | 'large';
}

interface NavItemProps {
  active: number;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav {
    a {
      & + a {
        margin-left: 32px;
      }
    }
  }
`;

export const NavItem = styled(Link)<NavItemProps>`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.2s;
  padding-bottom: 10px;
  opacity: 0.8;

  ${({ active }) =>
    active &&
    css`
      border-bottom: #ff872c 1px solid;
      opacity: 1;
    `}

  &:hover {
    opacity: 1;
  }
`;
