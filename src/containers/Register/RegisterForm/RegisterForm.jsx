import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./RegisterForm.style.css";

const RegisterForm = () => {
  return (
    <>
      <Form className="w-100">
        <Form.Group className="mb-4">
          <Form.Label className="fw-semibold mb-3">Email address</Form.Label>
          <Col>
            <Form.Control
              className="shadow-sm login-form-controls input-ph"
              type="email"
              placeholder="Enter email address"
            />
          </Col>
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="fw-semibold mb-3"> Referral Code? </Form.Label>
          <Col className="mb-3">
            <Form.Control
              className="shadow-sm login-form-controls input-ph"
              type="pass"
              placeholder="Enter password"
            />
          </Col>
          <Col className="w-100 mt-5">
            <p className="fw-normal text-center" style={{fontSize:".75em"}}>
              By continuing, I agree to FeatureDog's{" "}
                <a className="fw-bold" href="#"> Terms of Service.</a>
            </p>
          </Col>
        </Form.Group>
      </Form>
      <Button
        variant="secondary"
        className="w-100 border-0"
        style={{
          height: "6.5vh",
          backgroundColor: "#CDC9C3",
          color: "black",
        }}
        size="lg"
      >
        Sign Up
      </Button>
    </>
  );
};

export default RegisterForm;
