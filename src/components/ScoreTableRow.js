import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ScoreTableRow = (props) => {
  const { Name, Subject, Score } = props.obj;

  const deleteScore = () => {
    axios
      .delete(`http://localhost:5000/scores/delete-score/${Name}/${Subject}`, {
        data: {},
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };

  return (
    <tr>
      <td>{Name}</td>
      <td>{Subject}</td>
      <td>{Score}</td>
      <td>
        <Link className="edit-link" to={`/edit-score/${Name}/${Subject}`}>
          Edit
        </Link>
        <Button onClick={deleteScore} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ScoreTableRow;
