import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <Navbar color='light' light={true} expand='lg'>
        <Nav className='mx-auto' navbar={true}>
          <NavItem>
            <NavLink>Guidelines</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>FAQ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Support</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>API</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Lists</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Security</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Bookmarklet</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Legal</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Apply to YC</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Contact</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <form className={styles.footer__form} action=''>
        Search: <input className={styles.footer__input} name='search' type='text' />
      </form>
    </footer>
  );
};

export default Footer;
