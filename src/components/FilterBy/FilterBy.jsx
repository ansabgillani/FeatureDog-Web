import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const FilterBy = () => {
  return (
    <Container className="ms-0">
      <p className="d-inline fw-semibold"> Sort by:</p>

      <DropdownButton
        variant="outline-secondary"
        title="Select"
        id="home-dropdown"
        className="d-inline ms-3"
      >
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
      </DropdownButton>
    </Container>
  );
};

export default FilterBy;
