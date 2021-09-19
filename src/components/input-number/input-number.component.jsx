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

  return (
    <div className={`input-number ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input
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
