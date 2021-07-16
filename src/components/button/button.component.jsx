const Button = (props) => {
  const { text, onClick, className } = props;

  return (
    <button className={`button ${className}`} onClick={onClick}>
      <h3>{text}</h3>
    </button>
  );
};

export default Button;
