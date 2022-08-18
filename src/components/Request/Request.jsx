import Button from "react-bootstrap/esm/Button";
import { FaRegComment } from "react-icons/fa";

import Details from "../Details";

import "./Request.style.css";

const CommentCount = (props) => {
  return (
    <p className="my-2 opacity-50 fw-semibold" style={{ fontSize: ".85rem" }}>
      <FaRegComment className="me-2 mt-0" />
      {props.commentCount} comments
    </p>
  );
};

const Request = (props) => {
  return (
    <div className="request rounded-3 w-100 p-3 pb-0">
      <h5 className="fw-bold mb-1 d-inline">{props.title}</h5>
      {props.requestPage && <p className="request-created-at fw-semibold ms-3 d-inline">{props.createdAt}</p>}
      <Details author={props.author} tags={props.tags} />
      <p className="m-0 request-desc">{props.description}</p>
      {!props.requestPage && <CommentCount commentCount={props.commentCount} />}
      {props.requestPage && (
        <p className="fw-semibold text-danger d-inline-block mt-3 me-2">
          PLANNED
        </p>
      )}
      <Button className="rounded-3 mb-0 request-read" variant="light">
        See more
      </Button>
    </div>
  );
};

export default Request;
