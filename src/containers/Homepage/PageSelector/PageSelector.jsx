const PageSelector = (props) => {
  const styleRe = { borderBottom: "2px solid rgba(0, 0, 0, 0.25)" };
  const styleRo = { borderBottom: "none" };

  props.requestPage
    ? (styleRe.borderBottom = "2px solid rgba(0, 0, 0, 0.25)")
    : (styleRe.borderBottom = "none");

  props.roadmapPage
    ? (styleRo.borderBottom = "2px solid rgba(0, 0, 0, 0.25)")
    : (styleRo.borderBottom = "none");

  return (
    <div className="mx-5 py-0 my-4">
      <p className="d-inline py-1 px-3 m-3" style={styleRe}>
        <a
          href="#"
          className=""
          onClick={() => {
            props.setRequestPage(true);
            props.setRoadmapPage(false);
          }}
        >
          <strong>Roadmap</strong>
        </a>
      </p>
      <p className="d-inline py-1 px-3 m-3" style={styleRo}>
        <a
          href="#"
          className=""
          onClick={() => {
            props.setRoadmapPage(true);
            props.setRequestPage(false);
          }}
        >
          <strong>Requests</strong>
        </a>
      </p>
    </div>
  );
};

export default PageSelector;
