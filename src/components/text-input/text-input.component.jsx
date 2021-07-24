const TextInput = (props) => {
  const { label, onChange, className, id, value, disabled, min, max, step } =
    props;

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
    </>
  );
};

export default TextInput;
