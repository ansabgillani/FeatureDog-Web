import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import Navs from "./Navs";
import UserNav from "./UserNav";

import images from "../../utils/constants/images";
import "./Navbar.style.css";

const Menu = () => {
  return (
    <div className="">
      <Navbar
        bg="light"
        expand="md"
        className="m-0 p-0 fixed-top"
        style={{ boxShadow: "0px 0px 6px #0000007b" }}
      >
        <Container fluid>
          <Navbar.Brand href="#home" className="m-0 p-0">
            <img src={images.logoBlack} width="75" height="75" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="w-100 d-flex justify-content-center">
              <Navs />
            </div>
          </Navbar.Collapse>
          <UserNav />
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
