import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';

const getRows = (courses) => courses.sort((a, b) => a.title.localeCompare(b.title))
  .map((course, idx) => (
    <Course
      data={course}
      key={course.title}
      last={idx === courses.length - 1}
    />
  ));

const Courses = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="tools" />
    <div className="title">
      <h3>Tools known</h3>
    </div>
    <ul className="course-list">
      {getRows(data)}
    </ul>
  </div>
);

Courses.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    category: PropTypes.arrayOf(PropTypes.string),
  })),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;
