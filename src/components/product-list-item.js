import React from 'react';
import ProductForm from './product-form';

export class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      product: {
        id: props.id,
        name: props.name
      }
    };
  }

  onEdit = () => {
    this.setState(() => ({
      isEditing: true
    }));
  };

  onSubmit = product => {
    this.setState(() => ({
      isEditing: false
    }));
    this.props.onSubmit(product);
  };

  onRemove = () => {
    this.props.onRemove(this.state.product);
  };

  onCancel = () => {
    this.setState(() => ({
      isEditing: false
    }));
  };

  render() {
    return (
      <li key={this.props.name}>
        {this.props.name}
        <span>
          {this.state.isEditing ? (
            <ProductForm
              product={this.state.product}
              onSubmit={this.onSubmit}
              onCancel={this.onCancel}
            />
          ) : (
            <span>
              <button onClick={this.onEdit}>Edit</button>
              <button onClick={this.onRemove}>Remove</button>
            </span>
          )}
        </span>
      </li>
    );
  }
}

export default ProductListItem;
