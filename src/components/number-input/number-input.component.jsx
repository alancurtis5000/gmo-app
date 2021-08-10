const NumberInput = (props) => {
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
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        className={`number-input ${className}`}
        id={id}
        onClick={handleOnClick}
        onChange={onChange}
        onKeyPress={handleOnKeyPress}
        // converts to string to remove leading zero's
        value={value.toString()}
        disabled={disabled}
        name={name}
      />
    </>
  );
};

export default NumberInput;
