import React from 'react';
import Table from './Table';
import data from '../../data/stats/personal';

const PersonalStats = () => (
  <>
    <h3>{window.i18n('Some_stats_about_me')}</h3>
    <Table data={data} />
  </>
);

export default PersonalStats;
