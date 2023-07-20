import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/mldangelo/personal-site
 */
const data = [
  {
    label: 'Github_stars',
    key: 'stargazers_count',
    link: 'https://github.com/BabdCatha/BabdCatha.github.io/stargazers',
  },
  {
    label: 'Watchers',
    key: 'subscribers_count',
    link: 'https://github.com/BabdCatha/BabdCatha.github.io/stargazers',
  },
  {
    label: 'Forks',
    key: 'forks',
    link: 'https://github.com/BabdCatha/BabdCatha.github.io/network',
  },
  {
    label: 'Spoons',
    value: '0',
  },
  {
    label: 'Linter_warnings',
    value: '0', // enforced via github workflow
  },
  {
    label: 'Open_issues',
    key: 'open_issues_count',
    link: 'https://github.com/BabdCatha/BabdCatha.github.io/issues',
  },
  {
    label: 'Last_update',
    key: 'pushed_at',
    link: 'https://github.com/BabdCatha/BabdCatha.github.io/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Javascript_lines',
    value: '2042',
    link: 'https://github.com/BabdCatha/BabdCatha.github.io/graphs/contributors',
  },
];

export default data;
