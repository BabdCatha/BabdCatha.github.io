import React from 'react';
import PropTypes from 'prop-types';

import Tool from './Tools/Tools';

const getRows = (tools) => tools.sort((a, b) => a.title.localeCompare(b.title))
  .map((tool, idx) => (
    <Tool
      data={tool}
      key={tool.title}
      last={idx === tools.length - 1}
    />
  ));

const Tools = ({ data }) => (
  <div className="tools">
    <div className="link-to" id="tools" />
    <div className="title">
      <h3>Tools known</h3>
    </div>
    <ul className="tool-list">
      {getRows(data)}
    </ul>
  </div>
);

Tools.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    category: PropTypes.arrayOf(PropTypes.string),
  })),
};

Tools.defaultProps = {
  data: [],
};

export default Tools;
