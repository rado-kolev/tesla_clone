import { useEffect, useState } from 'react';
import styled from 'styled-components';
import jsonData from '../carInfo.json';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [leftMenuItems, setLeftMenuItems] = useState([]);

  useEffect(() => {
    // Fetching and setting the menu items from menuData.json
    setLeftMenuItems(jsonData.map((item) => item.title));
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const smoothScrollToSection = (index) => {
    const section = document.getElementById(`${index}`);
    section.scrollIntoView();
  };

  return (
    <Container>
      <a href='/'>
        <img src='/assets/images/logo.svg' alt='logo' />
      </a>
      <LeftMenu>
        {leftMenuItems.map((item, index) => (
          <a
            href={`#${index}`}
            key={index}
            onClick={() => smoothScrollToSection(index)}
          >
            {item}
          </a>
        ))}
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
        <LeftMenuMobile>
          {leftMenuItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${index}`}
                onClick={() => {
                  smoothScrollToSection(index);
                  toggleMenu();
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </LeftMenuMobile>
        <BurgerNavMenu>
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
        </BurgerNavMenu>
        <RightMenuMobile>
          <li>
            <a href='#'>Shop</a>
          </li>
          <li>
            <a href='#'>Tesla Account</a>
          </li>
        </RightMenuMobile>
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

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;

    @media screen and (max-width: 1280px) {
      display: none;
    }
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
  width: 240px;
  z-index: 100;
  list-style: none;
  padding: 48px 20px 0 20px;
  transition: right 0.5s ease;
  overflow-y: auto;
`;

const BurgerNavMenu = styled.div`
  display: flex;
  flex-direction: column;

  li {
    padding: 16px 0;
    margin-left: 10px;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    a {
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;

const LeftMenuMobile = styled.div`
  display: none;
  border-bottom: 3px solid rgba(0, 0, 0, 0.2);

  li {
    padding: 16px 0;
    margin-left: 10px;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
  }

  a {
    font-weight: 600;
    text-transform: uppercase;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const RightMenuMobile = styled.div`
  display: none;
  border-top: 3px solid rgba(0, 0, 0, 0.2);

  li {
    padding: 16px 0;
    margin-left: 10px;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
  }

  a {
    font-weight: 600;
    text-transform: uppercase;
  }

  @media screen and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;

export default Header;
