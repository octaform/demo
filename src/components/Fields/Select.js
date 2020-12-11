import React, { useRef } from "react";
import classNames from "classnames";
import string from "../../utils/string";
import Box from "./Box";

const Select = ({
  className,
  isValid,
  label = "",
  isRequired = false,
  items = [],
  autoComplete = "",
  ref = useRef(null),
  onChange = () => {}
}) => {
  const fieldName = string.camelize(label);

  return (
    <Box label={label} required={isRequired} className={className} error={isValid}>
      <select
        className="label__field"
        name={fieldName}
        autoComplete={autoComplete}
        onChange={onChange}
        ref={ref}
      >
        {items.map(item => (
          <option key={item.value} value={item.value}>{item.label}</option>
        ))}
      </select>
    </Box>
  )
}

export default Select;
