import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../../assets/images.png';
import styles from './Navbar.module.css';

const NavbarContainer = () => {
  return (
    <Navbar className={styles.container} light={true} expand='lg'>
      <NavbarBrand href='/'>
        <img className={styles.navbar__logo} src={logo} alt='' />
      </NavbarBrand>

      <NavbarBrand href='/'>Hacker News</NavbarBrand>

      <Nav navbar={true}>
        <NavItem>
          <NavLink href='/components/'>new</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/components/'>past</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/components/'>ask</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/components/'>show</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/components/'>comments</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/components/'>jobs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/components/'>submit</NavLink>
        </NavItem>
      </Nav>
      <Nav className='ml-auto'>
        <NavItem>
          <NavLink>login</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavbarContainer;
