const Container = (props) => {
  const { label, children } = props;
  return (
    <div className={`container ${props.className}`}>
      <div className={`container-header ${props.className}`}>{label}</div>
      {children}
    </div>
  );
};

Container.defaultProps = {
  label: "My Header label",
};

export default Container;
