import { useState, useEffect } from "react";
import AddIcon from "../../icons/add.icon";

const Select = (props) => {
  const { label, id, options, onChange, value, placeholder, disabled } = props;
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", close);
    } else {
      window.removeEventListener("click", close);
    }
    return () => {
      window.removeEventListener("click", close);
    };
  }, [isOpen]);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const selectItem = (option) => {
    console.log({ option });
    onChange(option.label);
    setIsOpen(false);
  };

  const renderOptions = () => {
    return options.map((option) => {
      return (
        <button
          key={option.id}
          className="select-list-item"
          onClick={() => selectItem(option)}
        >
          {option.label}
        </button>
      );
    });
  };

  // maybe instead of making this out of buttons use the html <select> element
  return (
    <div className="select-wrapper">
      <label htmlFor={id}>{label}</label>
      <button
        className="select-header"
        disabled={disabled}
        onClick={toggleList}
      >
        {value ? (
          <div className="select-title">{value}</div>
        ) : (
          <div className="select-title placeholder">{placeholder}</div>
        )}
        {isOpen ? <AddIcon /> : <AddIcon />}
      </button>
      {isOpen ? (
        <div role="list" className="select-list">
          <hr />
          {renderOptions()}
        </div>
      ) : null}
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
