import React, { useState, useEffect } from "react";
import axios from "axios";
import { ExportJsonCsv } from "react-export-json-csv";
import { Table } from "react-bootstrap";
import ScoreTableRow from "./ScoreTableRow";

const ScoreList = () => {
  const [scores, setScores] = useState([]);
  const [file, setFile] = useState();

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const csvInput = event.target.result;
        const formData = new FormData();
        formData.append("csvInput", csvInput);
        axios
          .post("http://localhost:5000/scores/upload-csv", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            if (res.status === 200) {
              alert("CSV file successfully uploaded.");
              window.location.reload();
            } else Promise.reject();
          })
          .catch((err) => {
            console.log(err);
            alert(err.response.data.message);
          });
      };

      fileReader.readAsText(file);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/scores")
      .then(({ data }) => {
        setScores(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () => {
    return scores.map((res, i) => {
      return <ScoreTableRow obj={res} key={i} />;
    });
  };

  const csvHeaders = [
    {
      key: "Name",
      name: "Name",
    },
    {
      key: "Subject",
      name: "Subject",
    },
    {
      key: "Score",
      name: "Score",
    },
  ];

  return (
    <>
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Score</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{DataTable()}</tbody>
        </Table>
      </div>
      <div className="csv-link">
        <ExportJsonCsv
          headers={csvHeaders}
          items={scores}
          fileTitle="scores"
        >
          Export CSV
        </ExportJsonCsv>
        <form>
          <input
            type={"file"}
            id={"csvFileInput"}
            accept={".csv"}
            onChange={handleOnChange}
          />
          <button
            onClick={(e) => {
              handleOnSubmit(e);
            }}
          >
            Import CSV
          </button>
        </form>
      </div>
    </>
  );
};

export default ScoreList;
