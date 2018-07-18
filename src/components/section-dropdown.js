import React from 'react';

export default class SectionDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <select onChange={this.props.onChange} value={this.props.foobar}>
        <option value="" disabled>
          Select section
        </option>
        <option value="no1">One</option>
        <option value="no2">Two</option>
        <option value="no3">Three</option>
        <option value="no4">Four</option>
      </select>
    );
  }
}
