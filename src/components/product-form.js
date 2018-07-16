import React from 'react';

export default class ProductForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.product ? props.product.name : '',
      error: ''
    };
  }

  onNameChange = e => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  onSubmit = e => {
    e.preventDefault();
    const product =
      this.props.product && this.props.product.id
        ? { id: this.props.product.id, name: this.state.name }
        : { name: this.state.name };
    this.props.onSubmit(product);
    this.setState(() => ({ error: '', name: '' }));
  };

  onCancel = () => {
    this.props.onCancel();
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input value={this.state.name} onChange={this.onNameChange} />
          <button>Save</button>
          <button type="button" onClick={this.onCancel}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}
