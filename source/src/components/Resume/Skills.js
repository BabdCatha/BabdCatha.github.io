import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CategoryButton from './Skills/CategoryButton';
import SkillBar from './Skills/SkillBar';

const handleProps = ({ categories, skills }) => ({
  buttons: categories.map((cat) => cat.name).reduce((obj, key) => ({
    ...obj,
    [key]: false,
  }), { Linguistics: true }),
  skills,
});

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = handleProps({ categories: props.categories, skills: props.skills });
    this.state.buttons.Linguistics = true;
  }

  getRows() {
    // search for true active categories
    const actCat = Object.keys(this.state.buttons).reduce((cat, key) => (
      this.state.buttons[key] ? key : cat
    ), 'Linguistics');

    return this.state.skills.sort((a, b) => {
      let ret = 0;
      if (a.fillRatio > b.fillRatio) ret = -1;
      else if (a.fillRatio < b.fillRatio) ret = 1;
      else if (a.category[0] > b.category[0]) ret = -1;
      else if (a.category[0] < b.category[0]) ret = 1;
      else if (a.title > b.title) ret = 1;
      else if (a.title < b.title) ret = -1;
      return ret;
    }).filter((skill) => (skill.category.includes(actCat)))
      .map((skill) => (
        <SkillBar
          categories={this.props.categories}
          data={skill}
          key={skill.title}
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
      <div className="skills">
        <div className="link-to" id="skills" />
        <div className="title">
          <h3>{window.i18n('skills')}</h3>
          <p>Note: I think these gauges are silly, but everyone seems to have these.
            Here is a *probably* honest overview of my skills.
          </p>
        </div>
        <div className="skill-button-container">
          {this.getButtons()}
        </div>
        <div className="skill-row-container">
          {this.getRows()}
        </div>
      </div>
    );
  }
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    competency: PropTypes.string,
    category: PropTypes.arrayOf(PropTypes.string),
  })),
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

Skills.defaultProps = {
  skills: [],
  categories: [],
};

export default Skills;
