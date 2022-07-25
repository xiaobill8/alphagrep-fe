import React from "react";

const TopStudentsRow = (props) => {
  const { Subject, Score, Name, Password, Class } = props.obj;

  return (
    <tr>
      <td>{Subject}</td>
      <td>{Name}</td>
      <td>{Score}</td>
      <td>{Class}</td>
      <td>{Password}</td>
    </tr>
  );
};

export default TopStudentsRow;
