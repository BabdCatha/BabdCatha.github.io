import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about my projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>A selection of projects that I&apos;m not too ashamed of</p>
        </div>
      </header>
      <div className="row">
        {data.map((project) => (
          <div className="col-4 col-6-medium col-12-small">
            <Cell
              data={project}
              key={project.title}
            />
          </div>
        ))}
      </div>
    </article>
  </Main>
);

export default Projects;
