import React from 'react';
import { connect } from 'react-redux';
import SectionForm from './section-form';
import SectionList from './section-list';
import { startAddSection } from '../actions/sections';

export class SectionPage extends React.Component {
  onSubmit = section => {
    this.props.startAddSection(section);
  };

  render() {
    return (
      <div>
        <h2>Section Page</h2>
        <SectionList />
        <SectionForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddSection: section => dispatch(startAddSection(section))
});

export default connect(
  undefined,
  mapDispatchToProps
)(SectionPage);
