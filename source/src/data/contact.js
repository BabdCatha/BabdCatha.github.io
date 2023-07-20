import { faBlogger } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/BabdCatha',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/tartempion',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:cyril.thomas@tartempion.engineer',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://babdcatha.net',
    label: 'Blog',
    icon: faBlogger,
  },
];

export default data;
