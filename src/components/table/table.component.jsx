import map from "lodash/map";
import forEach from "lodash/forEach";
import InputText from "../input-text/input-text.component";
import InputNumber from "../input-number/input-number.component";

// component not used but thinking about it.
const Table = (props) => {
  const { className, onClick, columns, rows, handleOnChange } = props;

  const renderHeader = () => {
    return columns.map((column, i) => (
      <div key={i} className={`header-field-${i}`}>
        {column.label}
      </div>
    ));
  };

  const handleOnChangeLocal = () => {
    handleOnChange();
  };

  const renderRows = () => {
    let rowsMapped = [];
    forEach(rows, (row, i) => {
      let rowValue = map(row, (value, key) => {
        let shouldDisplay = !!columns.find((column) => column.field === key);
        if (shouldDisplay) {
          if (typeof value === "number") {
            return (
              <InputNumber
                key={key}
                className="row-item"
                value={value}
                onChange={(e) =>
                  handleOnChangeLocal({
                    code: "cheese",
                    value: { key, value: e.target.value },
                  })
                }
              />
            );
          } else {
            return (
              <InputText
                key={key}
                className="row-item"
                value={value}
                onChange={(e) =>
                  handleOnChangeLocal({
                    code: "cheese",
                    value: { key, value: e.target.value },
                  })
                }
              />
            );
          }
        }
      });
      let createdRow = (
        <div key={i} className="row">
          {rowValue}
        </div>
      );
      rowsMapped.push(createdRow);
    });

    return rowsMapped;
  };

  return (
    <div className={`table ${className}`} onClick={onClick}>
      <div className="table-header">{renderHeader()}</div>
      <div className="table-rows">{renderRows()}</div>
    </div>
  );
};

export default Table;
