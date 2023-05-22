import React from "react";

const ViewAll = (props) => {

  const inputs = props.inputs;

  return (<div>
    {inputs.map((input) => (
      <div key={input.id}>
        <p>First Name: {input.fName}</p>
        <p>Last Name: {input.lName}</p>
        <p>Email: {input.email}</p>
        <p>EID: {input.eid}</p>
        <p>Birthday: {input.birthday}</p>
      </div>
    ))}
  </div>);
};

export default ViewAll;
