export default {
  firstName: {
    rules: {
      required: true,
      minlength: 4,
    },
    messages: {
      required: 'First Name is required',
    },
  },
  lastName: {
    rules: ['required', 'minlength:3']
  },
  email: 'email',
  country: {
    rules: {
      required: true,
      valueNotEquals: 'BR',
    },
  },
  file: {
    rules: {
      required: true,
      extension: ['png', 'jpg'],
    },
  },
  resume: 'required',
  gender: 'required',
  checkbox: {
    rules: {
      required: true,
      minchecked: 2
    }
  },
};
