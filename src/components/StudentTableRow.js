import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentTableRow = (props) => {
  const { Name, Password, Class } = props.obj;

  const deleteStudent = () => {
    axios
      .delete("http://localhost:5000/students/delete-student/" + Name)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  return (
    <tr>
      <td>{Name}</td>
      <td>{Password}</td>
      <td>{Class}</td>
      <td>
        <Link className="edit-link" to={"/edit-student/" + Name}>
          Edit
        </Link>
        <Button onClick={deleteStudent} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default StudentTableRow;
