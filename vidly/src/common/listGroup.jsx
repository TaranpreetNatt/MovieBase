import React from 'react';
import PropTypes from 'prop-types';

const ListGroup = (props) => {
  const { items, onItemSelect, selectedItem, textProperty, valueProperty } = props;
  return ( 
    <ul className="list-group">
      {items.map(item => (
        <li
          onClick={() => onItemSelect(item)} 
          key={item[valueProperty]}
          className={item === selectedItem ? "list-group-item active" : "list-group-item"}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

ListGroup.propTypes = {
  items: PropTypes.array.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.object,
  textProperty: PropTypes.string.isRequired,
  valueProperty: PropTypes.string.isRequired,
};
 
export default ListGroup;