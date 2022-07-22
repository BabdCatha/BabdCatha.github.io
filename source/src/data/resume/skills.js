// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [

  // Programming languages

  {
    title: 'Javascript',
    competency: 'Beginner',
    fillRatio: 2,
    category: ['Web Development', 'Programming languages'],
  },
  {
    title: 'C/C++',
    competency: 'Advanced',
    fillRatio: 5,
    category: ['Programming languages'],
  },
  {
    title: 'Python',
    competency: 'Advanced',
    fillRatio: 5,
    category: ['Programming languages'],
  },
  {
    title: 'CUDA',
    competency: 'Beginner',
    fillRatio: 3,
    category: ['Programming languages'],
  },
  {
    title: 'Java for Android',
    competency: 'Capable',
    fillRatio: 4,
    category: ['Programming languages'],
  },

  // Languages spoken

  {
    title: 'French',
    competency: 'Mother tongue',
    fillRatio: 5,
    category: ['Linguistics'],
  },
  {
    title: 'English',
    competency: 'C1, 990 on the TOEIC',
    fillRatio: 5,
    category: ['Linguistics'],
  },
  {
    title: 'German',
    competency: 'B1, but not spoken in a long time',
    fillRatio: 3,
    category: ['Linguistics'],
  },
  {
    title: 'Russian',
    competency: 'Between A2 and B1',
    fillRatio: 3,
    category: ['Linguistics'],
  },
  {
    title: 'Mandarin chinese',
    competency: 'Beginner',
    fillRatio: 1,
    category: ['Linguistics'],
  },

  // Microcontrollers

  {
    title: 'STM32 development',
    competency: 'Capable',
    fillRatio: 4,
    category: ['Microcontrollers'],
  },
  {
    title: 'Arduino and ESP32',
    competency: 'Capable',
    fillRatio: 4,
    category: ['Microcontrollers'],
  },
  {
    title: '8051 assembly',
    competency: 'Beginner',
    fillRatio: 3,
    category: ['Programming languages', 'Microcontrollers'],
  },

  // Hardware

  {
    title: 'VHDL',
    competency: 'Beginner',
    fillRatio: 3,
    category: ['Hardware'],
  },
  {
    title: 'Analog electronics',
    competency: 'Capable',
    fillRatio: 3,
    category: ['Hardware'],
  },
  {
    title: 'Radiofrequency communication',
    competency: 'Beginner',
    fillRatio: 2,
    category: ['Hardware'],
  },
  {
    title: 'RISC-V Architecture',
    competency: 'Beginner',
    fillRatio: 3,
    category: ['Hardware'],
  },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
