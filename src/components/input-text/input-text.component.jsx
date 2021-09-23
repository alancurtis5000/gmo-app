const InputInput = (props) => {
  const {
    label,
    onChange,
    className,
    id,
    value,
    disabled,
    min,
    max,
    step,
    error,
  } = props;

  const handleOnKeyPress = (e) => {
    const key = e.key;
    if (key === "Enter") {
      e.target.blur();
    }
  };

  let classNameValue = className ? className : "";
  return (
    <div className={`input-text ${classNameValue}`}>
      <label htmlFor={id}>{label}</label>
      <input
        className={`input ${classNameValue}`}
        type="text"
        id={id}
        onChange={onChange}
        onKeyPress={handleOnKeyPress}
        value={value}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
      />
      <p className="error" htmlFor={id}>
        {error}
      </p>
    </div>
  );
};

export default InputInput;
