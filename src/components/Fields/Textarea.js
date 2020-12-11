import React, { useRef } from "react";
import classNames from "classnames";
import string from "../../utils/string";
import Box from "./Box";

const Textarea = ({
  className,
  isValid,
  label = "",
  isRequired = false,
  ref = useRef(null),
  onChange = () => {}
}) => {
  const fieldName = string.camelize(label);

  return (
    <Box label={label} required={isRequired} className={className} error={isValid}>
      <textarea
        className="label__field"
        ref={ref}
        name={fieldName}
        onChange={onChange}
      />
    </Box>
  )
}

export default Textarea;
