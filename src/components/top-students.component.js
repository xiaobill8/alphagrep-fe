import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import TopStudentsRow from "./TopStudentsRow";

const StudentList = () => {
  const [topStudents, setTopStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/top-students")
      .then(({ data }) => {
        setTopStudents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () => {
    return topStudents.map((res, i) => {
      return <TopStudentsRow obj={res} key={i} />;
    });
  };

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Name</th>
            <th>Score</th>
            <th>Class</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

export default StudentList;
