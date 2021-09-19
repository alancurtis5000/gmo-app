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

  return (
    <div className={`input-text ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input
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
