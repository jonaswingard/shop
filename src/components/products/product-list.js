import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          {this.props.products.length === 0 ? (
            <tr>
              <td>No products</td>
            </tr>
          ) : (
            this.props.products.map(product => (
              <ProductListItem
                key={product.id}
                {...product}
                onSubmit={this.props.onSubmit}
                onRemove={this.props.onRemove}
                sections={this.props.sections}
              />
            ))
          )}
        </tbody>
      </table>
    );
  }
}
