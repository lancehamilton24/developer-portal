import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
// import './MyNavbar.scss';

class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    const { isAuthed, logoutClickEvent } = this.props;
    return (
      <div className="my-navbar">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Portal</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                { isAuthed ? <NavLink onClick={logoutClickEvent}>Logout</NavLink> : ''}
                {/* <NavLink href="/components/">Logout</NavLink> */}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
