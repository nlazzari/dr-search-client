import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink }
        from 'reactstrap';
import ToggleIconSVG from './img/noun_949244_cc_bandaid.svg';
import NavBrandIconSVG from './img/noun_949254_cc_stetho.svg';

const NavStyle = {
  boxShadow: '0px 28px 18px -18px rgba(0,0,0,0.28)',
  zIndex: '1000'
};

const ToggleIconStyle = {
  display: 'inline-block',
  width: '1.5em',
  height: '1.5em',
  verticalAlign: 'middle',
  content: '""',
  background: 'no-repeat center center',
  backgroundImage: `url(${ToggleIconSVG})`,
  backgroundSize: '100% 100%'
}

const NavBrandIconStyle = {
  display: 'inline-block',
  width: '1.5em',
  height: '1.5em',
  verticalAlign: 'middle',
  content: '""',
  background: 'no-repeat center center',
  backgroundImage: `url(${NavBrandIconSVG})`,
  backgroundSize: '100% 100%'
}

const NavBrandTexStyle = {
  fontSize: '0.9em',
  fontFamily: 'Avenir, Helvetica'
}

const ToggleIcon = <span style={ToggleIconStyle} />;
const NavBrandIcon = <span style={NavBrandIconStyle} />;


export default class AppNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div >
        <Navbar color="black" light toggleable style={NavStyle}>
          <NavbarToggler right onClick={this.toggle} >
            {ToggleIcon}
          </NavbarToggler>
          <NavbarBrand href="/">
            <span style={NavBrandTexStyle}>Find a GP</span>
            {NavBrandIcon}
            <span style={NavBrandTexStyle}>n BC</span>
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink color="black" href="/search">Search</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
