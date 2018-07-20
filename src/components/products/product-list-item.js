import React from 'react';
import ProductForm from './product-form';

export class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      product: {
        id: props.id,
        name: props.name,
        sectionId: props.sectionId
      }
    };
  }

  onEdit = () => {
    this.setState(() => ({
      isEditing: true,
      product: {
        id: this.props.id,
        name: this.props.name,
        sectionId: this.props.sectionId
      }
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
      <tr key={this.props.name}>
        <td>{this.props.name}</td>
        <td style={{ padding: '0 50px' }}>{this.props.sectionId}</td>
        <td>
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
        </td>
      </tr>
    );
  }
}

export default ProductListItem;
