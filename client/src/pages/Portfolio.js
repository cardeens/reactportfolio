import React, { Component } from "react";
import projects from "../components/projects.json";
import Project from "../components/Project";

class Portfolio extends Component {
    state = {
        projects
    }

    render() {
        return (
            <div className="container p-3 my-3">
                <h1>Portfolio</h1>
                <hr></hr>
                <div className="row">

                    {/* Projects without a public Github repo */}
                    <div className="col-lg-6 col-12">
                        <div className="card jjcard">
                            <div>
                            <img className="pennazLogo" src="images/PennazLogo.png" alt="Pennaz Logo" width="200" />
                            </div>
                            <hr></hr>
                            <div className="card-body">
                                <h4 className="card-title">Pennaz Software</h4>
                                <div className="links row">
                                    <div className="col-lg-12">
                                        <a href="www.pennaz.com">Deployed URL</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                    </div>

                    {/* Mapping json data with Projects component */}
                    {this.state.projects.map(project => (
                        <Project
                            name={project.name}
                            image={project.image}
                            deployed={project.deployed}
                            github={project.github}
                        />
                    ))}
                </div>
            </div>

        );
    }
}

export default Portfolio;