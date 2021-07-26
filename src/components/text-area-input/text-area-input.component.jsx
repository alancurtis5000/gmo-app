const TextAreaInput = (props) => {
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
    columns,
    rows,
  } = props;

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        className={`text-area ${className}`}
        id={id}
        onChange={onChange}
        value={value}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
        cols={columns}
        rows={rows}
      />
      <p className="error" htmlFor={id}>
        {error}
      </p>
    </>
  );
};

export default TextAreaInput;
