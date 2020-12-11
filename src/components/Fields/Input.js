import React, { useRef } from "react";
import string from "../../utils/string";
import Box from "./Box";

const Input = ({
  className,
  error = "",
  label = "",
  isRequired = false,
  type = "text",
  autoComplete = "",
  ref = useRef(null),
  onChange = () => {}
}) => {
  const fieldName = string.camelize(label);

  return (
    <Box label={label} required={isRequired} className={className} error={error}>
      <input
        className="label__field"
        type={type}
        name={fieldName}
        autoComplete={autoComplete}
        ref={ref}
        onChange={onChange}
      />
    </Box>
  )
}

export default Input;
