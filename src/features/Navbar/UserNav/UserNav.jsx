import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MdOutlineNotificationAdd, MdArrowDropDown } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

const UserNav = () => {
  return (
    <div className="d-flex align-items-center justify-content-end">
      <Navbar.Brand className="me-4" href="#home">
        <MdOutlineNotificationAdd size={25} />
      </Navbar.Brand>
      <Navbar.Brand href="#home">
        <AiOutlineUser size={25} />
      </Navbar.Brand>
      <NavDropdown
        style={{ width: "5vw"}}
        title="User"
        id="user-dropdown"
        className="dropstart"
      >
        <NavDropdown.Item href="#">Action</NavDropdown.Item>
        <NavDropdown.Item href="#">A</NavDropdown.Item>
        <NavDropdown.Item href="#">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Log Out</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default UserNav;
