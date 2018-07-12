import React from 'react';
import { connect } from 'react-redux';
import { selectProducts } from '../selectors/products';

export const ProductList = props => (
  <div>
    {props.products.length === 0 ? (
      <p>No products</p>
    ) : (
      props.products.map(product => <p key={product.name}>{product.name}</p>)
    )}
  </div>
);

const filters = {
  inShoppingList: true
};

const mapStateToProps = state => ({
  products: selectProducts(state.products, filters)
});

export default connect(mapStateToProps)(ProductList);
