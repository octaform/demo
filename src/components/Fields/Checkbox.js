import React, { useRef } from "react";
import classNames from "classnames";
import Box from "./Box";
import string from "../../utils/string";

const Checkbox = ({
  className,
  isValid,
  label = "",
  isRequired = false,
  items = [],
  onChange = () => {}
}) => {
  return (
    <Box tag="div" label={label} required={isRequired} className={className} error={isValid}>
      {items.map(item => (
        <label className="checkbox" key={item.label}>
          <input
            className="checkbox__field"
            ref={item.ref}
            type="checkbox"
            name={string.camelize(item.label)}
            value={item.value}
            onChange={onChange}
          />
          <span className="checkbox__label">{item.label}</span>
        </label>
      ))}
    </Box>
  )
}

export default Checkbox;
