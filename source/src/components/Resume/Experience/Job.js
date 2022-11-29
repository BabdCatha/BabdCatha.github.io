import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4><a href={data.link}>{window.i18n(data.company)}</a> - {window.i18n(data.position)}</h4>
      <p className="daterange"> {data.daterange}</p>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{window.i18n(point)}</li>
      ))}
    </ul>
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Job;
