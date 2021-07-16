const Button = (props) => {
  const { text, onClick, className } = props;
  return (
    <button className={`button ${className}`} onClick={onClick}>
      <h1>{text}</h1>
    </button>
  );
};

export default Button;
