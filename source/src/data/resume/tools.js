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
    title: 'Cadence Virtuoso',
    link: 'https://www.cadence.com/en_US/home/tools/custom-ic-analog-rf-design/circuit-design/virtuoso-analog-design-environment.html',
    category: ['Hardware design'],
  },
  {
    title: 'Xilinx Vivado',
    link: 'https://www.xilinx.com/products/design-tools/vivado.html',
    category: ['Hardware design'],
  },
  {
    title: 'Synopsys Design Vision',
    link: 'https://www.synopsys.com/implementation-and-signoff/rtl-synthesis-test/dc-ultra.html',
    category: ['Hardware design'],
  },
  {
    title: 'EasyEDA',
    link: 'https://easyeda.com/',
    category: ['Hardware design'],
  },
  {
    title: 'KiCAD',
    link: 'https://www.kicad.org/',
    category: ['Hardware design'],
  },
  {
    title: 'LTSpice XVII',
    link: 'https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html',
    category: ['Hardware design'],
  },

  {
    title: 'SimSmith',
    link: 'http://www.ae6ty.com/smith_charts.html',
    category: ['RF design'],
  },
  {
    title: 'MiniVNA Tiny',
    link: 'https://www.wimo.com/en/minivna-tiny',
    category: ['RF design'],
  },
  {
    title: 'MMANA-GAL',
    link: 'http://gal-ana.de/basicmm/en/',
    category: ['RF design'],
  },

  {
    title: 'Fusion 360',
    link: 'https://www.autodesk.com/products/fusion-360/personal',
    category: ['3D Design'],
  },
  {
    title: 'MeshMixer',
    link: 'https://www.meshmixer.com/',
    category: ['3D Design'],
  },
  {
    title: 'Cura',
    link: 'https://ultimaker.com/fr/software/ultimaker-cura',
    category: ['3D Design'],
  },

  {
    title: 'STM32CubeIDE',
    link: 'https://www.st.com/en/development-tools/stm32cubeide.html',
    category: ['Embedded'],
  },
  {
    title: 'ARM Keil',
    link: 'https://www.keil.com/',
    category: ['Embedded'],
  },
  {
    title: 'MPLabX IDE',
    link: 'https://www.microchip.com/en-us/tools-resources/develop/mplab-x-ide',
    category: ['Embedded'],
  },

  {
    title: 'Git',
    link: 'https://git-scm.com/',
    category: ['Teamwork'],
  },

  {
    title: 'Excel',
    link: 'https://www.microsoft.com/fr-fr/microsoft-365/excel',
    category: ['Bureautics'],
  },
  {
    title: 'Word',
    link: 'https://www.microsoft.com/fr-fr/microsoft-365/word',
    category: ['Bureautics'],
  },
  {
    title: 'PowerPoint',
    link: 'https://www.microsoft.com/fr-fr/microsoft-365/powerpoint',
    category: ['Bureautics'],
  },
  {
    title: 'OverLeaf',
    link: 'https://fr.overleaf.com/',
    category: ['Bureautics'],
  },
  {
    title: 'Nmap',
    link: 'https://nmap.org/',
    category: ['Pentest'],
  },
  {
    title: 'Burp Suite',
    link: 'https://portswigger.net/burp',
    category: ['Pentest'],
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
