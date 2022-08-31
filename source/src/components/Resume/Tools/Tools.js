import React from 'react';
import PropTypes from 'prop-types';

const Tool = ({ data, last }) => (
  <li className="tool-container">
    <a href={data.link}>
      <p className="tool-name">{data.title}</p>
    </a>
    {!last && <div className="tool-dot"><p className="tool-name"> &#8226;</p></div>}
  </li>
);

Tool.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

Tool.defaultProps = {
  last: false,
};

export default Tool;
