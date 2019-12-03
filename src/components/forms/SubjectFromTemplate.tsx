import React, { ChangeEvent, FocusEvent } from "react";
import { Form, Button } from "react-bootstrap";
import { TextInput } from "./TextInput";
import { DateInput } from "./DateInput";
import { SelectInput } from "./SelectInput";
import { FileInput } from "./FileInput";
import { SubjectFormModel } from "../../models/subject.model";
import {FormikErrors, FormikTouched} from 'formik';

interface Props {
  values: SubjectFormModel;
  errors: FormikErrors<SubjectFormModel>;
  touched: FormikTouched<SubjectFormModel>;
  handleChange: (e: ChangeEvent) => void;
  handleBlur: (e: FocusEvent) => void;
  handleSubmit: () => void;
  setFieldValue: (field: keyof SubjectFormModel, value: any) => void;
  fileName?: string;
  setFileName: (fileName: string) => void;
}

export const SubjectFormTemplate: React.FC<Props> = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
  fileName,
  setFileName
}) => {
  return (
    <Form className="mt-3" onSubmit={handleSubmit}>
      <TextInput
        fieldName={"title"}
        value={values.title}
        errors={errors.title}
        touched={touched.title}
        handleChange={handleChange}
        handleBlur={handleBlur}
        placeholder="Enter subject's title"
        label="Title"
      ></TextInput>

      <TextInput
        fieldName={"comingDate"}
        value={values.comingDate}
        errors={errors.comingDate}
        touched={touched.comingDate}
        handleChange={handleChange}
        handleBlur={handleBlur}
        placeholder="Estimated release date"
        label="Coming date"
      ></TextInput>

      <DateInput
        fieldName={"pendingDate"}
        value={values.pendingDate}
        errors={errors.pendingDate}
        touched={touched.pendingDate}
        handleChange={handleChange}
        handleBlur={handleBlur}
        label="Pending date"
      ></DateInput>

      <SelectInput
        fieldName={"category"}
        value={values.category}
        errors={errors.category}
        touched={touched.category}
        handleChange={handleChange}
        handleBlur={handleBlur}
        label="Category"
        options={[
          { value: "", title: "Select subject`s category" },
          { value: "Serial", title: "Serial" },
          { value: "Film", title: "Film" },
          { value: "Book", title: "Book" },
          { value: "Album", title: "Music album" },
          { value: "Anime", title: "Anime" }
        ]}
      />

      <FileInput
        fieldName={"imgFile"}
        errors={errors.imgFile}
        touched={touched.imgFile}
        setFieldValue={setFieldValue}
        handleBlur={handleBlur}
        label="Image"
        fileName={fileName}
        setFileName={setFileName}
        accept=".jpg, .jpeg, .png"
      />

      <Button className="mt-3 mx-auto d-block" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
