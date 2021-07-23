const Checkbox = (props) => {
  const { label, onChange, className, id, checked, disabled } = props;

  return (
    <>
      <input
        type="checkbox"
        className={`checkbox ${className}`}
        id={id}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default Checkbox;
