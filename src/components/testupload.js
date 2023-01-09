
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import axios from "axios";


function TestUpload() {
  return (
    <Formik
      initialValues={{
        profile: [],
      }}
      validationSchema={Yup.object({
        profile:Yup.array().min(1,"select at least 1 file")
      })}
      onSubmit={(values, props) => {
        let data = new FormData();
        values.profile.forEach((photo, index) => {
          data.append(`photo${index}`, values.profile[index]);
        });
        axios
          .post("image/upload", data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      {(formik) => {
        return (
          <>
            <Form>
              <input
                id="file"
                name="profile"
                type="file"
                onChange={(event) => {
                  const files = event.target.files;
                  let myFiles =Array.from(files);
                  formik.setFieldValue("profile", myFiles);
                }}
                multiple
              />
              <ErrorMessage name="profile"/>
              <button type="submit" disabled={formik.isSubmitting}>
                Submit
              </button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}

export default TestUpload;