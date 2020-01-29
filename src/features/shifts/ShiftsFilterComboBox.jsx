import PropTypes from 'prop-types'
import React from 'react'

function ShiftsFilterComboBox(props) {
  const {label, options, value, onChange} = props;
  return (
    <label>{label}
      <select
        value={value}
        onChange={onChange}>
          {
            options.map(op =>
              <option
                  key={op.value}
                  value={op.value}>
                {op.text}
              </option>
            )
          }
      </select>
    </label>
  );
};

ShiftsFilterComboBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
};

export default ShiftsFilterComboBox;
