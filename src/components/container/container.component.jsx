const Container = (props) => {
  const { label, children, className } = props;
  let classNameValue = className ? className : "";
  return (
    <div className={`container ${classNameValue}`}>
      <div className={`container-header ${classNameValue}`}>{label}</div>
      <div className={`container-content ${classNameValue}`}> {children}</div>
    </div>
  );
};

Container.defaultProps = {
  label: "My Header label",
};

export default Container;
