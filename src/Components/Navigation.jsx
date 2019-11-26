import React from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar color="dark" dark>
      <Link to="/" className="navbar-brand">
        Strivestaurant - Striving for food
      </Link>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/menu" className="nav-link">
            Menu
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/reservation" className="nav-link">
            Reservation
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
