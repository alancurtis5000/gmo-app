const InputTextArea = (props) => {
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

  let classNameValue = className ? className : "";
  return (
    <div className={`input-text-area ${classNameValue}`}>
      <label htmlFor={id}>{label}</label>
      <textarea
        className={`input ${classNameValue}`}
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
    </div>
  );
};

export default InputTextArea;
