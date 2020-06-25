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
  birthDate: {
    rules: {
      date: 'DD/MM/YYYY'
    }
  },
  email: {
    rules: ['required', 'email']
  },
  password: {
    rules: {
      required: true
    }
  },
  confirmPassword: {
    rules: {
      required: true,
      equalTo: '[name=password]'
    },
    messages: {
      equalTo: 'Passwords doesn\'t match',
    },
  },
  country: {
    rules: {
      required: true,
      valueNotEquals: 'BR',
    },
  },
  range: {
    rules: {
      number: true,
      range: [5, 8]
    }
  },
  url: 'url',
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
