import React from 'react';
import { connect } from 'react-redux';
import { selectSections } from '../../selectors/sections';
import SectionListItem from './section-list-item';
import { startEditSection, startRemoveSection } from '../../actions/sections';

export class SectionList extends React.Component {
  onSubmit = section => {
    this.props.startEditSection(section.id, section);
  };

  onRemove = section => {
    this.props.startRemoveSection({ id: section.id });
  };

  render() {
    return (
      <ul>
        {this.props.sections.length === 0 ? (
          <li>No sections</li>
        ) : (
          this.props.sections.map(section => (
            <SectionListItem
              key={section.id}
              {...section}
              onSubmit={this.onSubmit}
              onRemove={this.onRemove}
            />
          ))
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  sections: selectSections(state.sections)
});

const mapDispatchToProps = dispatch => ({
  startEditSection: (id, section) => dispatch(startEditSection(id, section)),
  startRemoveSection: data => dispatch(startRemoveSection(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionList);
