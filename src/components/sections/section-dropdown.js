import React from 'react';

export default class SectionDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <select onChange={this.props.onChange} value={this.props.sectionId}>
        <option value="" disabled>
          Select section
        </option>
        {this.props.sections.map(section => (
          <option value={section.id} key={section.id}>
            {section.name}
          </option>
        ))}
      </select>
    );
  }
}
