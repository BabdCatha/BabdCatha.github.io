import React from 'react';
import PropTypes from 'prop-types';

import Achievement from './Achievements/Achievement';

const Achievements = ({ data }) => (
  <div className="achievement">
    <div className="link-to" id="achievements" />
    <div className="title">
      <h3>Achievements</h3>
    </div>
    {data.map((achievement) => (
      <Achievement
        data={achievement}
      />
    ))}
  </div>
);

Achievements.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    desc: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    linkAddress: PropTypes.string.isRequired,
  })),
};

Achievements.defaultProps = {
  data: [],
};

export default Achievements;
