import React from "react";
import { Form, Button } from "react-bootstrap";
import { TextInput } from "./TextInput";
import { DateInput } from "./DateInput";
import { SelectInput } from "./SelectInput";
import { FileInput } from "./FileInput";

export const SubjectFormTemplate = ({
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
          { value: "serial", title: "Serial" },
          { value: "film", title: "Film" },
          { value: "book", title: "Book" },
          { value: "album", title: "Music album" },
          { value: "anime", title: "Anime" }
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
