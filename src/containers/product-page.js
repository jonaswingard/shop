import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/products/product-list';
import ProductForm from '../components/products/product-form';
import { startAddProduct } from '../actions/products';
import { selectSections } from '../selectors/sections';

export class ProductPage extends React.Component {
  onSubmit = product => {
    this.props.startAddProduct(product);
  };

  render() {
    return (
      <div>
        <h2>Product Page</h2>
        <ProductList sections={this.props.sections} />
        <ProductForm onSubmit={this.onSubmit} sections={this.props.sections} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sections: selectSections(state.sections)
});

const mapDispatchToProps = dispatch => ({
  startAddProduct: product => dispatch(startAddProduct(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
