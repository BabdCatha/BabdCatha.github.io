import React from 'react';
import PropTypes from 'prop-types';

const Achievement = ({ data }) => (
  <li key={data.desc}>{data.desc} <a href={data.linkAddress}>{data.linkText}</a></li>
);

Achievement.propTypes = {
  data: PropTypes.shape({
    desc: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    linkAddress: PropTypes.string.isRequired,
  }).isRequired,
};

export default Achievement;
