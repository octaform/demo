import { Schema } from "@octaform/core";

const schema = new Schema({
  firstName: {
    rules: {
      required: true,
      minlength: 4,
      letter: true
    },
    messages: {
      required: 'First Name is required',
    }
  },
  lastName: {
    rules: {
      required: true,
      minlength: 3
    }
  },
});

export default schema;
