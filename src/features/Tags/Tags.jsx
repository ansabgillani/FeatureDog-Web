import Tag from "../../components/Tag";

const Tags = (props) => {
  const tags = props.tags;

  return (
    <div className="d-inline">
      {tags.map((tag, index) => {
        return <Tag key={index} tag={tag} />;
      })}
    </div>
  );
};

export default Tags;
