const tools = [
  {
    title: 'Logisim',
    link: 'http://www.cburch.com/logisim/',
    category: ['Hardware design'],
  },
  {
    title: 'ModelSim',
    link: 'https://eda.sw.siemens.com/en-US/ic/modelsim/',
    category: ['Hardware design'],
  },
  {
    title: 'Excel',
    link: 'https://www.microsoft.com/fr-fr/microsoft-365/excel',
    category: ['Bureautics'],
  },
];

const toolCategories = [
  ...new Set(tools.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category) => ({
    name: category,
  }));

export { toolCategories, tools };
