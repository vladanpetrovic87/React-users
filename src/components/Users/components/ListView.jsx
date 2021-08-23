import React from "react";
import { hideMail } from "../../../functions/functions";

export const ListView = ({ users }) => {
  return (
    <ul className="collection">
      {users.map((element) => (
        <li className="collection-item avatar">
          <img src={element.picture.thumbnail} alt="" className="circle" />
          <div className="userData">
            <p>name: {element.name.first}</p>
            <p>email: {hideMail(element.email)}</p>
            <p>
              date of birth:{" "}
              {element.dob.date.slice(0, 10).split("-").reverse().join(".")}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
