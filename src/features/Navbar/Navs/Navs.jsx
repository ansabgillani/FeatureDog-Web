import Nav from "react-bootstrap/Nav";

function Navs() {
  return (
    <Nav activeKey="/dashboard">
      <Nav.Item>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/customers" eventKey="link-1">
          Customers
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/tags" eventKey="link-2">
          Tags
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navs;
