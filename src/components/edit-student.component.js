// EditStudent Component for update student data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";

// EditStudent Component
const EditStudent = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    password: "",
    classID: "",
  });
  console.log(props);

  //onSubmit handler
  const onSubmit = (studentObject) => {
    axios
      .put(
        "http://localhost:5000/students/update-student/" +
          props.match.params.name,
        studentObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully updated");
          props.history.push("/student-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  // Load data from server and reinitialize student form
  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/students/update-student/" +
          props.match.params.name
      )
      .then((res) => {
        const { name, password, class: classID } = res.data;
        setFormValues({ name, password, classID });
      })
      .catch((err) => console.log(err));
  }, [props.match.params.name]);

  // Return student form
  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Student
    </StudentForm>
  );
};

// Export EditStudent Component
export default EditStudent;
