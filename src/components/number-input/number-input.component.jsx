const NumberInput = (props) => {
  const { label, onChange, className, id, value, disabled, name } = props;

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        className={`number-input ${className}`}
        id={id}
        onChange={onChange}
        value={value}
        disabled={disabled}
        name={name}
      />
    </>
  );
};

export default NumberInput;
