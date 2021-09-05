import React from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

const Header = (props) => {
  return (
      <Navbar id="Header" light={true} expand="md" className='fixed-top Header' position='sticky'>
        <NavbarBrand href="/"><h3 className='my-auto' >Dino-store</h3></NavbarBrand>
      </Navbar>
  );
}

export default Header;