const Checkbox = (props) => {
  const { label, onChange, className, id, checked, disabled } = props;

  const classNameValue = className ? className : "";

  return (
    <div id={id} className={`input-checkbox ${classNameValue}`}>
      <label>{label}</label>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="checkmark"></span>
    </div>
  );
};

export default Checkbox;
