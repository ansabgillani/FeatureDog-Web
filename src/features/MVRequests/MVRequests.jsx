import MVRequest from "../../components/MVRequest";
import "./MVRequests.style.css";

const MVRequests = (props) => {
  const requests = props.requests.MVRequestData;

  return (
    <div className="ms-3 mvrequests-border">
      <strong>
        <p>Most Voted</p>
      </strong>

      <div className="d-flex flex-sm-row gap-4 pe-4 flex-lg-column flex-column">
        {requests.map((request, index) => {
          return (
            <MVRequest
              key={index}
              title={request.title}
              author={request.author}
              organization={request.organization}
              tags={request.tags}
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
