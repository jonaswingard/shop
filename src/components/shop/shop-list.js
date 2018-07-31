import React from 'react';
import ShopSectionListItem from './shop-section-list-item';

export default class ShopList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.sections.length === 0 ? (
          <li>No products</li>
        ) : (
          this.props.sections.map(section => (
            <ShopSectionListItem
              key={section.id}
              section={section}
              onToggle={this.props.onToggle}
            />
          ))
        )}
      </ul>
    );
  }
}
