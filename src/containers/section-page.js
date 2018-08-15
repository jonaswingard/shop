import React from 'react';
import { connect } from 'react-redux';
import SectionForm from '../components/sections/section-form';
import SectionList from '../components/sections/section-list';
import {
  startAddSection,
  startEditSection,
  startRemoveSection,
  startSortSections
} from '../actions/sections';
import { selectSections } from '../selectors/sections';
import { arrayMove } from 'react-sortable-hoc';

export class SectionPage extends React.Component {
  onAddSubmit = section => {
    this.props.startAddSection(section);
  };

  onEditSubmit = section => {
    this.props.startEditSection(section.id, section);
  };

  onRemove = section => {
    this.props.startRemoveSection({ id: section.id });
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    const sections = arrayMove(this.props.sections, oldIndex, newIndex);
    this.props.startSortSections(
      sections.map((section, index) => ({
        ...section,
        sortId: index
      }))
    );
  };

  render() {
    return (
      <div>
        <h2>Section Page</h2>
        <SectionList
          sections={this.props.sections}
          onSubmit={this.onEditSubmit}
          onRemove={this.onRemove}
          onSortEnd={this.onSortEnd}
        />
        <SectionForm onSubmit={this.onAddSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sections: selectSections(state.sections)
});

const mapDispatchToProps = dispatch => ({
  startAddSection: section => dispatch(startAddSection(section)),
  startEditSection: (id, section) => dispatch(startEditSection(id, section)),
  startRemoveSection: data => dispatch(startRemoveSection(data)),
  startSortSections: sections => dispatch(startSortSections(sections))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionPage);
