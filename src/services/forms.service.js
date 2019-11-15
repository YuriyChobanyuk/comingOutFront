export const submitForm = async (values, actions, setFileName) => {
  actions.setSubmitting(false);
  const isValid = await actions.validateForm(values);
  if (isValid) {
    console.log(`values: `, values);
    actions.resetForm();
    if (setFileName) setFileName("Choose file...");
  } else {
    actions.setTouched();
  }
};
