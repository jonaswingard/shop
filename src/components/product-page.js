import React from 'react';
import { connect } from 'react-redux';
import ProductList from './product-list';
import ProductForm from './product-form';
import { startAddProduct } from '../actions/products';

export class ProductPage extends React.Component {
  onSubmit = product => {
    this.props.startAddProduct(product);
  };

  render() {
    return (
      <div>
        <h2>Product Page</h2>
        <ProductList />
        <ProductForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddProduct: product => dispatch(startAddProduct(product))
});

export default connect(
  undefined,
  mapDispatchToProps
)(ProductPage);
