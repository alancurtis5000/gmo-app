const TextInput = (props) => {
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
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        className={`text-input ${className}`}
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
    </>
  );
};

export default TextInput;
