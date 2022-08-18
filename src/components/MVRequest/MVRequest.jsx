import Button from "react-bootstrap/esm/Button";
import Navbar from "../../features/Navbar";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Tag from "../Tag/Tag";
import Tags from "../../features/Tags/Tags";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import "./MVRequest.style.css";

const MVRequest = (props) => {
  return (
    <div
      className="request rounded-3 w-100 p-3 pb-1"
      style={{ fontSize: "1em" }}
    >
      <h5 className="fw-bold mb-1" style={{ fontSize: "1rem" }}>
        {props.title}
      </h5>
      <h6 className="fw-semibold mb-1" style={{ fontSize: ".9rem" }}>
        {props.author}
        <pre className="d-inline"> | </pre>
        <Tags tags={props.tags} />
        <div className=" mx-5 float-end">
          <AiOutlineArrowUp
            size={60}
            className=" rounded-3"
            style={{ height: "60px", backgroundColor: "#D9E4DD" }}
          />
          <p className="ms-3 mt-2 fs-5">45</p>
        </div>
      </h6>
      <p className="my-2 opacity-50" style={{ fontSize: ".85rem" }}>
        <strong>
          <FaRegComment className="me-2 mt-0" />
          {props.commentCount} comments
        </strong>
      </p>
      <Button
        className="rounded-3 mb-0"
        variant="light"
        style={{ backgroundColor: "#D9E4DD", fontSize: ".85rem" }}
      >
        See more
      </Button>
    </div>
  );
};

export default MVRequest;
