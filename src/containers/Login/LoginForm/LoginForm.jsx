import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./LoginForm.style.css";

const LoginForm = () => {
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
        <Form.Group className="mb-4">
          <Form.Label className="fw-semibold mb-3">Password</Form.Label>
          <Col className="mb-3">
            <Form.Control
              className="shadow-sm login-form-controls input-ph"
              type="pass"
              placeholder="Enter password"
            />
          </Col>
          <Col className="w-100">
            <p className="text-end btm-tag-line">
              <a href="#"> Sign Up </a>
            </p>
          </Col>
        </Form.Group>
      </Form>
      <Button
          variant="secondary"
          className="mt-3 w-100 border-0"
          style={{
            height: "6.5vh",
            backgroundColor: "#CDC9C3",
            color: "black",
          }}
          size="lg"
        >
          Log In
        </Button>

    </>
  );
};

export default LoginForm;
