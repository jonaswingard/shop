import React from 'react';
import { connect } from 'react-redux';
import { selectProducts } from '../selectors/products';
import { selectSectionsDetailed } from '../selectors/sections';
import ShopList from '../components/shop/shop-list';
import { startEditProduct } from '../actions/products';
export class ShopPage extends React.Component {
  onToggle = (product, inCart) => {
    this.props.startEditProduct(product.id, {
      ...product,
      inCart
    });
  };

  render() {
    return (
      <div>
        <h2>Shopping List Page</h2>
        <ShopList
          sections={this.props.sectionsDetailed}
          onToggle={this.onToggle}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productsInList: selectProducts(state.products, {
    inShoppingList: true
  }),
  sectionsDetailed: selectSectionsDetailed(state.sections, state.products)
});

const mapDispatchToProps = dispatch => ({
  startEditProduct: (id, product) => dispatch(startEditProduct(id, product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
