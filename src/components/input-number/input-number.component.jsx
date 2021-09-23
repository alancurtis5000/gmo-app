const InputNumber = (props) => {
  const { label, onChange, className, id, value, disabled, name } = props;

  const handleOnKeyPress = (e) => {
    const key = e.key;
    if (key === "Enter") {
      e.target.blur();
    }
  };

  const handleOnClick = (e) => {
    e.target.select();
  };

  let classNameValue = className ? className : "";
  return (
    <div className={`input-number ${classNameValue}`}>
      <label htmlFor={id}>{label}</label>
      <input
        className={`input ${classNameValue}`}
        type="number"
        id={id}
        onClick={handleOnClick}
        onChange={onChange}
        onKeyPress={handleOnKeyPress}
        value={value}
        disabled={disabled}
        name={name}
      />
    </div>
  );
};

export default InputNumber;
