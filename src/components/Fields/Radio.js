import React, { useRef } from "react";
import classNames from "classnames";
import string from "../../utils/string";
import Box from "./Box";

const Radio = ({
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
        <label className="radio" key={item.label}>
          <input
            className="radio__field"
            ref={item.ref}
            type="radio"
            name={string.camelize(label)}
            value={item.value}
            onChange={onChange}
          />
          <span className="radio__label">{item.label}</span>
        </label>
      ))}
    </Box>
  )
}

export default Radio;
