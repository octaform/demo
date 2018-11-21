export default {
  firstName: {
    rules: {
      required: true,
      minlength: 4,
      letter: true
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
      maxsize: 500000
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
