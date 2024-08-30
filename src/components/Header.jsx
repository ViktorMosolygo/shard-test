import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import shardLogo from "../images/shard_logo_invers.svg";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 60px;
  top: 0;
  left: 0;
  z-index: 1000;
  color: white;
  background-color: rgb(15, 88, 90);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
`;

const Logo = styled.div`
   padding: 0 8px;
`;

const Nav = styled.nav`
padding: 0 8px;
  display: flex;
  gap: 20px;

  a {
    color: #fff;
    text-decoration: none;
    padding-bottom: 5px;
    position: relative;

    &:hover {
      color: #fff;
    }

    &:hover::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -18px; 
      width: 100%;
      height: 2px;
      background-color: #fff;
    }
  }

    @media (max-width: 999px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 999px) {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? "0" : "-100%")};
  height: 100vh;
  width: 250px;
  background-color: #fff;
  padding: 20px;
  transition: right 0.3s ease-in-out;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  z-index: 1100;
  overflow-y: auto;

  a {
  color: rgb(0, 0, 0);
  padding: 2rem 0;
  text-decoration: none;
  font-family: "DM Sans", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;

  }

  .close-icon {
    align-self: flex-end;
    cursor: pointer;
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  padding: 0 16px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: #0073e6;
  }
`;

const Overlay = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1050;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <HeaderWrapper>
      <Logo><img src={shardLogo} alt="Shard Logo" style={{ height: "38px" }}/></Logo>
      <Nav>
        <NavLink href="/#">Holiday homes</NavLink>
        <NavLink href="/#">Learn</NavLink>
        <NavLink href="/#">About us</NavLink>
        <NavLink href="/#">Contact</NavLink>
        <NavLink href="/#">Blog</NavLink>
        <NavLink href="/#">For agents</NavLink>


      </Nav>

      <HamburgerMenu onClick={toggleMenu}>
        <FiMenu size={24} color="#fff" />
      </HamburgerMenu>

      <Overlay isOpen={isOpen} onClick={closeMenu} />

      <MobileMenu isOpen={isOpen}>
        <a href="/#" onClick={toggleMenu}>Holiday homes</a>
        <a href="/#" onClick={toggleMenu}>Learn</a>
        <a href="/#" onClick={toggleMenu}>About us</a>
        <a href="/#" onClick={toggleMenu}>Contact</a>
        <a href="/#" onClick={toggleMenu}>Blog</a>
        <a href="/#" onClick={toggleMenu}>For agents </a>
      </MobileMenu>
    </HeaderWrapper>
  );
};

export default Header;
