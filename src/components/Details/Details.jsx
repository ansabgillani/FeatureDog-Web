import Tags from "../../features/Tags/Tags";
import { AiOutlineArrowUp } from "react-icons/ai";

const Details = (props) => {
  return (
    <h6 className="fw-semibold mb-1" style={{ fontSize: ".9rem" }}>
      {props.author}
      <pre className="d-inline"> | </pre>
      <Tags tags={props.tags} />
      <div className=" mx-5 mb-5 mt-3 float-end request-comment-count">
        <AiOutlineArrowUp
          size={60}
          className=" rounded-3"
          style={{ height: "60px", backgroundColor: "#D9E4DD" }}
        />
        <p className="ms-3 mt-2 fs-5">45</p>
      </div>
    </h6>
  );
};

export default Details;
