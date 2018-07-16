import React from 'react';
import { connect } from 'react-redux';
import { selectProducts } from '../selectors/products';
import ProductListItem from './product-list-item';
import { startEditProduct, startRemoveProduct } from '../actions/products';

export class ProductList extends React.Component {
  onSubmit = product => {
    this.props.startEditProduct(product.id, product);
  };

  onRemove = product => {
    this.props.startRemoveProduct({ id: product.id });
  };

  render() {
    return (
      <ul>
        {this.props.products.length === 0 ? (
          <li>No products</li>
        ) : (
          this.props.products.map(product => (
            <ProductListItem
              key={product.id}
              {...product}
              onSubmit={this.onSubmit}
              onRemove={this.onRemove}
            />
          ))
        )}
      </ul>
    );
  }
}

const filters = {
  inShoppingList: false
};

const mapStateToProps = state => ({
  products: selectProducts(state.products, filters)
});

const mapDispatchToProps = dispatch => ({
  startEditProduct: (id, product) => dispatch(startEditProduct(id, product)),
  startRemoveProduct: data => dispatch(startRemoveProduct(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
