import React from 'react';
import SectionListItem from './section-list-item';

export default class SectionList extends React.Component {
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
              onSubmit={this.props.onSubmit}
              onRemove={this.props.onRemove}
            />
          ))
        )}
      </ul>
    );
  }
}
