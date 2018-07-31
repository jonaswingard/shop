import React from 'react';
import ShopProductListItem from './shop-product-list-item';

export class ShopSectionListItem extends React.Component {
  render() {
    return (
      <li key={this.props.section.id + 'foo'}>
        <strong>{this.props.section.name}</strong>
        <ul>
          {this.props.section.products.map(product => (
            <ShopProductListItem
              key={product.id}
              {...product}
              onToggle={this.props.onToggle}
            />
          ))}
        </ul>
      </li>
    );
  }
}

export default ShopSectionListItem;
