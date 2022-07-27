// EditScore Component for update student data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import ScoreForm from "./ScoreForm";
import { useNavigate, useParams } from "react-router-dom";

// EditScore Component
const EditScore = () => {
  const { name, subject } = useParams();
  const [formValues, setFormValues] = useState({
    name: "",
    subject: "",
    score: "",
  });
  const navigate = useNavigate();

  //onSubmit handler
  const onSubmit = (scoreObject) => {
    axios
      .put(
        `http://localhost:5000/scores/update-score/${name}/${subject}`,
        scoreObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Score successfully updated");
          navigate("/score-list");
        } else Promise.reject();
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };

  // Load data from server and reinitialize student form
  useEffect(() => {
    axios
      .get(`http://localhost:5000/scores/update-score/${name}/${subject}`)
      .then((res) => {
        console.log("RES:");
        console.log(res);
        const { Name, Subject, Score } = res.data[0];
        console.log(Name);
        setFormValues({ name: Name, subject: Subject, score: Score });
      })
      .catch((err) => console.log(err));
  }, [name, subject]);

  // Return student form
  return (
    <ScoreForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Score
    </ScoreForm>
  );
};

// Export EditScore Component
export default EditScore;
