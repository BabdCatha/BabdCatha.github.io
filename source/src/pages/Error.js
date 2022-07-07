import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const About = () => (
  <Main
    title="Oops"
    description="Page not found"
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Looks like this page does not exist</Link></h2>
        </div>
      </header>
    </article>
  </Main>
);

export default About;
