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

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        className={`text-input ${className}`}
        id={id}
        onChange={onChange}
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
