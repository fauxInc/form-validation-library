
// Defined the validation rules as an object
const validationRules = {
  required: (value) => {
    return (value ? '' : 'This field is required.')
  },

  email: (value) => {
    return (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value) ? '' : 'Please enter a valid email address.')
  },

  phone: (value) => {
    return (/^[0-9]{10}$/.test(value) ? '' : 'Please enter a valid 10-digit phone number.')
  },

  password: (value) => {
    if (!value) return 'Password is required.';
    if (value.length < 8) return 'Password must be at least 8 characters long.';
    if (!/[A-Z]/.test(value)) return 'Password must contain at least one uppercase letter.';
    if (!/[0-9]/.test(value)) return 'Password must contain at least one number.';
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) return 'Password must contain at least one special character.';
    return '';
  },

  minLength: (value, min) => {
    return (value.length >= min ? '' : `Must be at least ${min} characters.`)
  },

  isAdult: (value) => {
    const age = new Date().getFullYear() - new Date(value).getFullYear();
    return (age >= 18 ? '' : 'Must be 18 or older.')
  },

  isNumber: (value) => {
    return /^[0-9]+$/.test(value) ? '' : 'Must be a valid number.';
  },  

  isAlphabetic: (value) => {
    return /^[A-Za-z]+$/.test(value) ? '' : 'Must contain only alphabetic characters.';
  },

  isAlphanumeric: (value) => {
    return /^[A-Za-z0-9]+$/.test(value) ? '' : 'Must contain only alphanumeric characters.';
  },  

  matches: (value, matchValue) => {
    return (value === matchValue ? '' : 'Fields do not match.')
  },
};

// Main validateField function that takes field name, value, and rules

export const validateField = (name, value, rules = [], formData = {}) => {
  let errors = [];
  rules.forEach((rule) => {
    if (typeof rule === 'string') {

      // Simple rules, like 'required' or 'email'

      const error = validationRules[rule](value);
      if (error) errors.push(error);
    } else if (typeof rule === 'object') {

      // Rule with parameters, like { rule: 'minLength', param: 8 } or { rule: 'matches', param: formData.password }

      const [ruleName, param] = Object.entries(rule)[0];
      const error = validationRules[ruleName](value, param);
      if (error) errors.push(error);
    }
  });
  // Return combined errors if any
  // return errors.length ? errors.join('. ') : ''; 
  // Return only the first error (if any)
  return errors.length ? errors[0] : '';  // This returns the first error message
};

// Utility function for validating the entire form

export const validateForm = (formData, formRules) => {
  const formErrors = {};
  Object.keys(formData).forEach((field) => {
    const rules = formRules[field] || [];
    const error = validateField(field, formData[field], rules, formData);
    if (error) formErrors[field] = error;
  });
  return formErrors; // Return all form errors
};
