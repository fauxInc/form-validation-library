# Form Validation Library

A comprehensive and easy-to-use form validation library designed for React applications. This library simplifies form validation and handling of form data across your projects.

#### Demo : 

[Form Validation Library Demo](https://github.com/Vaishnav-io/form-validation-demo)

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
   - [Importing the Library](#importing-the-library)
   - [Defining Validation Rules](#defining-validation-rules)
   - [Validating Form Fields](#validating-form-fields)
   - [Validating the Entire Form](#validating-the-entire-form)
3. [Available Validation Rules](#available-validation-rules)
   - [Built-in Validation Rules](#built-in-validation-rules)
   - [Custom Validation Rules](#custom-validation-rules)
4. [Examples](#examples)
   - [Simple Form Validation](#simple-form-validation)
   - [Advanced Form Validation](#advanced-form-validation)
5. [Contributing](#contributing)
6. [License](#license)

## Installation

To install the form validation library, you can use npm or yarn:
```bash
<<Not Available>>
```

## Usage

### Importing the Library

Import the necessary functions from the form validation library in your React component:

```javascript
import { validateField, validateForm } from '@your-path/form-validation';
```

### Defining Validation Rules

Define the validation rules for your form fields as an object, where the keys represent the field names and the values are arrays of validation rules

Example:

```javascript
const formRules = {
  name: ['required', { minLength: 2 }, 'isAlphabetic'],
  email: ['required', 'email'],
  phone: ['required', 'phone'],
  dob: ['required', 'isAdult'],
  password: ['password'],
  confirmPassword: ['required', { matches: 'password' }],
};
```

### Validating Form Fields

Use the `validateField` function to validate individual form fields

Example:

```javascript
const handleChange = (e) => {
  const { name, value } = e.target;
  const error = validateField(name, value, formRules[name], formData);
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: error,
  }));
};
```

### Validating the Entire Form

Use the `validateForm` function to validate the entire form:

Example:

```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  const formErrors = validateForm(formData, formRules);
  setErrors(formErrors);

  if (Object.keys(formErrors).length === 0) {
    console.log('Form submitted successfully:', formData);
  } else {
    console.log('Form has errors:', formErrors);
  }
};
```

## Available Validation Rules

### Built-in Validation Rules

The library provides the following built-in validation rules:

- `required`: Ensures the field is not empty.
- `email`: Validates the field as a valid email address.
- `phone`: Validates the field as a valid 10-digit phone number.
- `password`: Validates the password field based on your specified requirements (e.g., minimum length, uppercase letters, numbers, and special characters).
- `minLength`: Ensures the field length is at least the specified minimum.
- `isAdult`: Validates that the date of birth field represents an age of 18 or older.
- `isNumber`: Ensures the field contains only numeric characters.
- `isAlphabetic`: Ensures the field contains only alphabetic characters.
- `matches`: Ensures the field matches the value of another field (e.g., password confirmation).

### Custom Validation Rules

You can define your own custom validation rules by adding them to the validation rules object in the `formValidation.js` file. Custom rules can be simple or complex depending on your application's needs.

## Examples

### Simple Form Validation

```javascript
import { validateField, validateForm } from '@your-org/form-validation';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const formRules = {
    name: ['required', { minLength: 2 }, 'isAlphabetic'],
    email: ['required', 'email'],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value, formRules[name], formData),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData, formRules);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
    } else {
      console.log('Form has errors:', formErrors);
    }
  };

  // Render the form...
};
```

### Advanced Form Validation

```javascript
import { validateField, validateForm } from '@your-org/form-validation';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const formRules = {
    name: ['required', { minLength: 2 }, 'isAlphabetic'],
    email: ['required', 'email'],
    phone: ['required', 'phone'],
    dob: ['required', 'isAdult'],
    password: ['password'],
    confirmPassword: ['required', { matches: 'password' }],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value, formRules[name], formData),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData, formRules);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
    } else {
      console.log('Form has errors:', formErrors);
    }
  };

  // Render the form...
};
```

## Contributing

We welcome contributions to the form validation library. If you find any issues or have ideas for new features, feel free to open an issue or submit a pull request on the project's GitHub repository.

## Questions or Issues?

For any questions or issues, feel free to open an [issue](https://github.com/Vaishnav-io/form-validation-library/issues) in the repository.

<a href="https://discord.gg/yNKKCqkSAX" target="_blank">
  <img src="https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white" alt="Join Discord"">
</a>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
