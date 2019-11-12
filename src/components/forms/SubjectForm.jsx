import React from 'react';
import { Formik } from 'formik';
// import * as Yup from 'yup';

import { SubjectFormTemplate } from './SubjectFromTemplate';

export const SubjectForm = () => {
  return (
    <Formik
      initialValues={{
        title: '',
        comingDate: '',
        pendingDate: '',
        category: '',
        imgFile: null,
      }}
      onSubmit={(values, actions) => {
        console.log(`values: `, values);
        actions.setSubmitting(false);
      }}
    >
      {props => <SubjectFormTemplate {...props} />}
    </Formik>
  );
};
