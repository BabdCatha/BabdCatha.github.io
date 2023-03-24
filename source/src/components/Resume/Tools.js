import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CategoryButton from './Skills/CategoryButton';
import Tool from './Tools/Tools';

const handleProps = ({ categories, tools }) => ({
  buttons: categories.map((cat) => cat.name).reduce((obj, key) => ({
    ...obj,
    [key]: false,
  }), { Bureautics: true }),
  tools,
});

class Tools extends Component {
  constructor(props) {
    super(props);
    this.state = handleProps({ categories: props.categories, tools: props.tools });
    this.state.buttons.Bureautics = true;
  }

  getRows() {
    // search for true active categories
    const actCat = Object.keys(this.state.buttons).reduce((cat, key) => (
      this.state.buttons[key] ? key : cat
    ), 'Bureautics');

    return this.state.tools.sort((a, b) => a.title.localeCompare(b.title))
      .filter((tool) => (tool.category.includes(actCat)))
      .map((tool, idx) => (
        <Tool
          data={tool}
          key={tool.title}
          last={idx === this.state.tools
            .filter((elem) => (elem.category.includes(actCat))).length - 1}
        />
      ));
  }

  getButtons() {
    return Object.keys(this.state.buttons).map((key) => (
      <CategoryButton
        label={key}
        key={key}
        active={this.state.buttons}
        handleClick={this.handleChildClick}
      />
    ));
  }

  handleChildClick = (label) => {
    this.setState((prevState) => {
      // Toggle button that was clicked. Turn all other buttons off.
      const buttons = Object.keys(prevState.buttons).reduce((obj, key) => ({
        ...obj,
        [key]: (label === key),
      }), {});
      return { buttons };
    });
  };

  render() {
    return (
      <div className="tools">
        <div className="link-to" id="tools" />
        <div className="title">
          <h3>{window.i18n('tools')}</h3>
          <p>Here is a list of some of the tools I already have experience with.
          </p>
        </div>
        <div className="skill-button-container">
          {this.getButtons()}
        </div>
        <div className="tools">
          <div className="link-to" id="tools" />
          <ul className="tool-list">
            {this.getRows()}
          </ul>
        </div>
      </div>
    );
  }
}

Tools.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    category: PropTypes.arrayOf(PropTypes.string),
  })),
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })),
};

Tools.defaultProps = {
  tools: [],
  categories: [],
};

export default Tools;
