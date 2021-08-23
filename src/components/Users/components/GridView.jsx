import React from "react";
import { hideMail } from "../../../functions/functions";

export const GridView = ({ users }) => {
  return (
    <div className="row container">
      {users.map((element) => (
        <div className="col s2 m4 row">
          <div className="card">
            <div className="card-image">
              <img src={element.picture.large} />
              <span className="card-title">{element.name.first}</span>
            </div>
            <div className="card-content">
              <p> {hideMail(element.email)}</p>
              <p>
                {" "}
                {element.dob.date.slice(0, 10).split("-").reverse().join(".")}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
