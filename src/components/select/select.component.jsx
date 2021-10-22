const Select = (props) => {
  const { label, id, options, onChange, value, placeholder, disabled } = props;

  const selectItem = (e) => {
    const value = e.target.value;
    onChange(value);
  };

  const renderOptions = () => {
    return options.map((option) => {
      const key = option.code || option.id;
      return (
        <option key={key} value={option.label} className="option">
          {option.label}
        </option>
      );
    });
  };

  return (
    <div className="select-wrapper">
      {placeholder ? null : null}
      <label htmlFor={id}>{label}</label>
      <select
        name=""
        id=""
        value={value}
        onChange={selectItem}
        disabled={disabled}
      >
        {renderOptions()}
      </select>
    </div>
  );
};

Select.defaultProps = {
  placeholder: "",
  value: "",
  options: [],
  onChange: () => {},
};

export default Select;
