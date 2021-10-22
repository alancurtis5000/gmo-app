const Select = (props) => {
  const { label, id, options, onChange, value, placeholder, disabled } = props;

  const selectItem = (e) => {
    const value = e.target.value;
    onChange(value);
  };

  const renderOptions = () => {
    return options.map((option) => {
      return (
        <option key={option.id} className="option" value={option.label}>
          {option.label}
        </option>
      );
    });
  };

  return (
    <div className="select-wrapper">
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
