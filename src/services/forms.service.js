export const submitForm = async (values, actions, callback, setFileName) => {
  actions.setSubmitting(false);
  const isValid = await actions.validateForm(values);
  if (isValid) {
    await callback(values);
    actions.resetForm();
    if (setFileName) setFileName("Choose file...");
  } else {
    actions.setTouched();
  }
};
