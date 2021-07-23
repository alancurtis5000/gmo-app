const Checkbox = (props) => {
  const { label, onClick, className, id, checked, disabled } = props;

  //
  return (
    <>
      <input
        type="checkbox"
        className={`checkbox ${className}`}
        id={id}
        onClick={onClick}
        checked={checked}
        disabled={disabled}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default Checkbox;
