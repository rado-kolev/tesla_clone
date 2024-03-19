import { useState } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <a>
        <img src='/assets/images/logo.svg' alt='logo' />
      </a>
      <LeftMenu>
        <a href='#'>Model Y</a>
        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
      </LeftMenu>

      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        
          <Hamburger onClick={toggleMenu}>
            <div />
            <div />
            <div />
          </Hamburger>
        
      </RightMenu>

      <BurgerNav isOpen={isOpen}>
        <CloseButton onClick={toggleMenu}>&times;</CloseButton>
        <li>
          <a href='#'>Existing Inventory</a>
        </li>
        <li>
          <a href='#'>Used Inventory</a>
        </li>
        <li>
          <a href='#'>Trade-in</a>
        </li>
        <li>
          <a href='#'>Cybertruck</a>
        </li>
        <li>
          <a href='#'>Roadster</a>
        </li>
        <li>
          <a href='#'>Semi</a>
        </li>
        <li>
          <a href='#'>Charging</a>
        </li>
        <li>
          <a href='#'>Utilities</a>
        </li>
        <li>
          <a href='#'>Test Drive</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`;

const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 2rem;
  height: 1.05rem;
  padding-left: 10px;
  margin-right: 10px;
  background: transparent;
  cursor: pointer;
  z-index: 50;

  div {
    width: 1.5rem;
    height: 0.185rem;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    position: relative;
  }
`;

const CloseButton = styled.div`
position: absolute;
  top: 10px;
  right: 20px;
  font-size: 2.5rem;
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 250px;
  z-index: 100;
  list-style: none;
  padding: 60px 20px 0 20px;
  transition: right 0.5s ease;

  li {
    padding: 16px 0;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    a {
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;

export default Header;
