import Octaform, { Schema, extend } from "@octaform/core";
import validation from "@octaform/validation";
import schema from "./validation-schemas/basic";

Octaform.extend([
  validation.required,
  validation.minlength,
  validation.letter
]);

const fields = {};
const options = {};

schema.validate(fields, options);
schema.validateAll(options);

Octaform.validate(fields, schema, options);

export default {};
