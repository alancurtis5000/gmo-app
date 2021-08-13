import map from "lodash/map";
import forEach from "lodash/forEach";

const Table = (props) => {
  const { className, onClick, columns, rows } = props;

  const renderHeader = () => {
    return columns.map((column, i) => (
      <div key={i} className={`header-field-${i}`}>
        {column.label}
      </div>
    ));
  };

  const renderRows = () => {
    let rowsMapped = [];
    forEach(rows, (row, i) => {
      let rowValue = map(row, (value, key) => {
        let shouldDisplay = !!columns.find((column) => column.field === key);
        if (shouldDisplay) {
          return (
            <div key={key} className="row-item">
              {value}
            </div>
          );
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
