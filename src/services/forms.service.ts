import { FormikHelpers } from 'formik';
import { SubjectFormModel } from './../models/subject.model';

export const submitForm = async <T>(
         values: T,
         actions: FormikHelpers<T>,
         callback: (values: T) => void,
         setFileName: (fileName: string) => void
       ) => {
         actions.setSubmitting(false);
         try {
           const isValid = await actions.validateForm(values);
           if (isValid) {
             await callback(values);
             actions.resetForm();
             if (setFileName) setFileName("Choose file...");
           } else {
             actions.setTouched(values);
           }
         } catch (e) {
           throw new Error("Subject saving error: " + e.message);
         }
       };

export const reformatToMultipart = (values: SubjectFormModel): FormData => {
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
