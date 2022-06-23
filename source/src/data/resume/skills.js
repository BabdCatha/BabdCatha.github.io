// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 'Beginner',
    fillRatio: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'C/C++',
    competency: 'Advanced',
    fillRatio: 5,
    category: ['Languages'],
  },
  {
    title: 'CUDA',
    competency: 'Beginner',
    fillRatio: 3,
    category: ['Languages'],
  },
  {
    title: 'STM32 development',
    competency: 'Capable',
    fillRatio: 4,
    category: ['Microcontrollers'],
  },
  {
    title: '8051 assembly',
    competency: 'Beginner',
    fillRatio: 3,
    category: ['Languages', 'Microcontrollers'],
  },
  {
    title: 'Java for Android',
    competency: 'Capable',
    fillRatio: 4,
    category: ['Languages'],
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
