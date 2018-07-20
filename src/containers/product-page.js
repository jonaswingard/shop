import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/products/product-list';
import ProductForm from '../components/products/product-form';
import {
  startAddProduct,
  startEditProduct,
  startRemoveProduct
} from '../actions/products';
import { selectProducts } from '../selectors/products';
import { selectSections } from '../selectors/sections';

export class ProductPage extends React.Component {
  onAddSubmit = product => {
    this.props.startAddProduct(product);
  };

  onEditSubmit = product => {
    this.props.startEditProduct(product.id, product);
  };

  onRemove = product => {
    this.props.startRemoveProduct({ id: product.id });
  };

  render() {
    return (
      <div>
        <h2>Product Page</h2>
        <ProductList
          products={this.props.products}
          sections={this.props.sections}
          onSubmit={this.onEditSubmit}
          onRemove={this.onRemove}
        />
        <ProductForm
          onSubmit={this.onAddSubmit}
          sections={this.props.sections}
        />
      </div>
    );
  }
}

const filters = {
  inShoppingList: false
};

const mapStateToProps = state => ({
  sections: selectSections(state.sections),
  products: selectProducts(state.products, filters)
});

const mapDispatchToProps = dispatch => ({
  startAddProduct: product => dispatch(startAddProduct(product)),
  startEditProduct: (id, product) => dispatch(startEditProduct(id, product)),
  startRemoveProduct: data => dispatch(startRemoveProduct(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
