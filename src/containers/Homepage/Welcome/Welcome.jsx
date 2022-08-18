import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";

import "./Welcome.style.css";

const Welcome = () => {
  return (
    <>
      <Container className="homepage-container py-5 align-items-center d-flex mx-sm-5">
        <Container className="ps-lg-4 w-50">
          <h5 className="m-0">Welcome back</h5>
          <h2>
            <strong> Muahmmad Yusuf</strong>
          </h2>
        </Container>

        <Container className="w-50">
          <Button
            variant="light"
            className="p-4 fw-semibold rounded-4 welcome-button"
          >
            Submit a new request
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default Welcome;
