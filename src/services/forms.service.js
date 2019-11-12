export const generateForm = fields => {
  return fields.reduce((acc, field) => {
    acc[field] = {
      value: '',
      validators: [],
      isValid: true,
      isTouched: false,
      errorMessages: new Set()
    };

    return acc;
  }, {});
};


export const setValidator = (form, field, validArr) => {
  return {
    ...form,
    [field]: {
      ...form[field],
      validators: [...form[field].validators, ...validArr]
    }
  }
}