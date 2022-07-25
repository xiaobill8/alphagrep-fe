// EditStudent Component for update student data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
import { useNavigate, useParams } from "react-router-dom";

// EditStudent Component
const EditStudent = () => {
  const { name } = useParams();
  const [formValues, setFormValues] = useState({
    name: "",
    password: "",
    classID: "",
  });
  const navigate = useNavigate();

  //onSubmit handler
  const onSubmit = (studentObject) => {
    axios
      .put(
        "http://localhost:5000/students/update-student/" + name,
        studentObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully updated");
          navigate("/student-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  // Load data from server and reinitialize student form
  useEffect(() => {
    axios
      .get("http://localhost:5000/students/update-student/" + name)
      .then((res) => {
        console.log("RES:");
        console.log(res);
        const { Name, Password, Class } = res.data[0];
        console.log(Name);
        setFormValues({ name: Name, password: Password, class: Class });
      })
      .catch((err) => console.log(err));
  }, [name]);

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
