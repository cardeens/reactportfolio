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
                {this.state.projects.map(project => (
                    <Project
                        name={project.id}
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