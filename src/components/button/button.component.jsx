const Button = (props) => {
  const { text, onClick, className, icon } = props;

  return (
    <button className={`button ${className} main`} onClick={onClick}>
      <h3 className="text">{text}</h3>
      <div className="icon">{icon}</div>
    </button>
  );
};

export default Button;
