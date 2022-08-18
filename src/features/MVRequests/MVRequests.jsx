import MVRequest from "../../components/MVRequest";
import "./MVRequests.style.css";

const MVRequests = (props) => {
  const requests = props.requests.MVRequestData;

  return (
    <div className="ms-5">
      <strong>
        <p>Most Voted</p>
      </strong>

      <div className="d-flex flex-column gap-4 pe-4">
        {requests.map((request, index) => {
          return (
            <MVRequest
              key={index}
              title={request.title}
              author={request.author}
              organization={request.organization}
              tags={request.tags}
              // description={request.description}
              upvotes={request.upvotes}
              commentCount={request.commentCount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MVRequests;
