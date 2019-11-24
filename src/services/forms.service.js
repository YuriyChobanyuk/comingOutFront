export const submitForm = async (values, actions, callback, setFileName) => {
  actions.setSubmitting(false);
  try {
    const isValid = await actions.validateForm(values);
    if (isValid) {
      await callback(values);
      actions.resetForm();
      if (setFileName) setFileName("Choose file...");
    } else {
      actions.setTouched();
    }
  } catch (e) {
    throw new Error("Subject saving error: " + e.message);
  }
};

export const reformatToMultipart = values => {
  const formData = new FormData();
  Object.keys(values).forEach(key => {
    if (values[key] instanceof File) {
      formData.append(key, values[key], values[key].name);
    } else {
      formData.append(key, values[key]);
    }
  });
  return formData;
};
