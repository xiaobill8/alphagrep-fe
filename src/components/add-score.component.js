// CreateStudent Component for add new student

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import ScoreForm from "./ScoreForm";

// CreateStudent Component
const AddScore = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    subject: "",
    score: "",
  });
  // onSubmit handler
  const onSubmit = (scoreObject) => {
    axios
      .post("http://localhost:5000/scores/add-score", scoreObject)
      .then((res) => {
        if (res.status === 200) alert("Score successfully added");
        else Promise.reject();
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };

  // Return student form
  return (
    <ScoreForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Add Score
    </ScoreForm>
  );
};

// Export AddScore Component
export default AddScore;
