import { useState, useEffect } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const Select = (props) => {
  const { options, handleSelect, value, placeholder } = props;
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
    handleSelect(option);
    setIsOpen(false);
  };

  const renderOptions = () => {
    return options.map((option) => (
      <button
        key={option.id}
        className="select-list-item"
        onClick={() => selectItem(option)}
      >
        {option.title || option.name}
      </button>
    ));
  };

  return (
    <div className="select-wrapper">
      <button className="select-header" onClick={toggleList}>
        {value ? (
          <div className="select-title">{value}</div>
        ) : (
          <div className="select-title placeholder">{placeholder}</div>
        )}
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </button>
      {isOpen ? (
        <div role="list" className="select-list">
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
  handleSelect: () => {},
};

export default Select;
