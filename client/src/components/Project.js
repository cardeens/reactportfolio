import React from "react";

function Project(props) {
  return (
    <div className="col-lg-6 col-12">
    <div className="card jjcard">
      <img className="card-img-top" src={props.image} alt={props.name} width="200" height="200" />
      <hr></hr>
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
        <div className="links row">
          <div className="col-lg-6">
            <a href={props.deployed}>Deployed URL</a>
          </div>
          <div className="col-lg-6">
            <a href={props.github}>GitHub Repo</a>
          </div>
        </div>
      </div>
    </div>
    <br></br>
  </div>
  );
}

export default Project;