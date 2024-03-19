const ComponentContainer = (props) => {
  const Children = props.children;
  const tag = props.tag;
  return (
    <div className="component-container">
      <p className={`${tag ? "tag-text" : "event-text"}`}>{props.title}</p>
      <Children />
    </div>
  );
};

export default ComponentContainer;
