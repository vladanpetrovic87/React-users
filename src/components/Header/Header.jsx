import React from "react";

export const Header = ({ isListView, onLayoutToggle }) => {
  console.log("Header: ", isListView);
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo"></a>
        <a className="waves-effect waves-light btn" onClick={onLayoutToggle}>
          {" "}
          {isListView ? "List View" : "Grid View"}{" "}
        </a>
      </div>
    </nav>
  );
};
