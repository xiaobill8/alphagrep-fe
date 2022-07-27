import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const ScoreForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    subject: Yup.string().required("Required"),
    score: Yup.number()
      .test(
        "maxDigitsAfterDecimal",
        "Score field must have at most 3 decimal ",
        (number) => /^\d+(\.\d{1,3})?$/.test(number)
      )
      .required("Required"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <label htmlFor="name">Name</label>
          <FormGroup>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <label htmlFor="subject">Subject</label>
          <FormGroup>
            <Field name="subject" type="text" className="form-control" />
            <ErrorMessage
              name="subject"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <label htmlFor="score">Score</label>
          <FormGroup>
            <Field name="score" type="number" className="form-control" />
            <ErrorMessage
              name="score"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button variant="danger" size="lg" block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ScoreForm;
