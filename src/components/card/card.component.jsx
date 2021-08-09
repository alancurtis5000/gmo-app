const Card = (props) => {
  return (
    <div className={`card ${props.className}`}>
      <div className="card-header">{props.header}</div>
      <div className="card-content">{props.content}</div>
    </div>
  );
};

export default Card;
