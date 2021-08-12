const Table = (props) => {
  const { text, onClick, className, icon } = props;

  // left off hear building a simple table component.
  return (
    <div className={`table ${className}`} onClick={onClick}>
      <div>Header</div>
      <div>content</div>
      <div>content</div>
    </div>
  );
};

export default Table;
