import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Achievements from '../components/Resume/Achievements';
import Skills from '../components/Resume/Skills';
import Tools from '../components/Resume/Tools';
import References from '../components/Resume/References';

import { tools, toolCategories } from '../data/resume/tools';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import achievements from '../data/resume/achievements';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'education',
  'experience',
  'achievements',
  'skills',
  'tools',
  'references',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Cyril Thomas's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to=".">{window.i18n('resume')}</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{window.i18n(sec)}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Achievements data={achievements} />
      <Skills skills={skills} categories={categories} />
      <Tools tools={tools} categories={toolCategories} />
      <References />

    </article>
  </Main>
);

export default Resume;
