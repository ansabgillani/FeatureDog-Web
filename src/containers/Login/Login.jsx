import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginForm from "./LoginForm";
import images from "../../utils/constants/images";

import "./Login.style.css";

const Login = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="vh-100 d-flex align-items-center justify-content-center">
            <div className="form-container d-flex align-items-center flex-column justify-content-center">
              <h2 className="text-start w-100 fw-bold mb-4">Log in </h2>
              <p className="fw-semibold text-break mb-5">
                With FeatureDog, you can request your favourite feature to your
                favourite products. Log in to request now.
              </p>

              <LoginForm />
            </div>
          </Col>

          <Col
            className="d-none d-sm-none d-md-none d-lg-block vh-100 "
            style={{ backgroundColor: "#D9E4DD" }}
          >
            <div className="w-100 h-100 d-flex align-items-center justify-content-center">
              <img
                className="img-fluid"
                src={images.logoBlack}
                width="600"
                height="600"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
