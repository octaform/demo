import React from "react";
import classNames from "classnames";

const Box = ({
  tag,
  label,
  required,
  className,
  children,
  error
}) => {
  const TagType = tag || "label";
  const classStyle = classNames(className, "label", { "label--error": error });

  return (
    <TagType className={classStyle}>
      <span className="label__title">
        {`${label} ${required ? "*" : ""}`}
      </span>

      {children}

      {error && (
        <span className="label__error">{error}</span>
      )}
    </TagType>
  )
}

export default Box;
