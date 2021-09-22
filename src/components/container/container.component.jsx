const Container = (props) => {
  const { label, children, className } = props;
  return (
    <div className={`container ${className}`}>
      <div className={`container-header ${className}`}>{label}</div>
      <div className={`container-content ${className}`}> {children}</div>
    </div>
  );
};

Container.defaultProps = {
  label: "My Header label",
};

export default Container;
