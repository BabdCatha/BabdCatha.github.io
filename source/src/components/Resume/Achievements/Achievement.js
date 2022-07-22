import React from 'react';
import PropTypes from 'prop-types';

const Achievement = ({ data }) => (
  <article className="achievements-container">
    <ul><li>{data.desc} <a href={data.linkAddress}>{data.linkText}</a></li></ul>
  </article>
);

Achievement.propTypes = {
  data: PropTypes.shape({
    desc: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    linkAddress: PropTypes.string.isRequired,
  }).isRequired,
};

export default Achievement;
