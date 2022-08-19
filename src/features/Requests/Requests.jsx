import Request from "../../components/Request";

import "./Requests.style.css";

const Requests = (props) => {
  const requests = props.requests.requestData;

  return (
    <div className="flex-grow-1 d-flex flex-column gap-4 p-2 requests-container" style={{ width: "45rem"}}>
      {requests.map((request, index) => {
        return (
          <Request
            key={index}
            title={request.title}
            author={request.author}
            organization={request.organization}
            tags={request.tags}
            description={request.description}
            upvotes={request.upvotes}
            commentCount={request.commentCount}
            requestPage={request.requestPage}
            createdAt={request.createdAt}
          />
        );
      })}
    </div>
  );
};

export default Requests;
