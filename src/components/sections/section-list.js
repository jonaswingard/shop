import React from 'react';
import SectionListItem from './section-list-item';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

export default class SectionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: props.sections
    };
  }

  render() {
    const SortableItem = SortableElement(({ section }) => (
      <SectionListItem
        {...section}
        onSubmit={this.props.onSubmit}
        onRemove={this.props.onRemove}
      />
    ));

    const SortableList = SortableContainer(({ items }) => {
      return (
        <ul>
          {items.map((section, index) => (
            <SortableItem
              key={`item-${index}`}
              index={index}
              section={section}
            />
          ))}
        </ul>
      );
    });

    return (
      <SortableList
        items={this.props.sections}
        onSortEnd={this.props.onSortEnd}
        useDragHandle={true}
      />
    );
  }
}
