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
    this.props.onSubmit({
      name: this.state.name
    });
    this.setState(() => ({ error: '', name: '' }));
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input value={this.state.name} onChange={this.onNameChange} />
          <button>Save</button>
          <button type="button">Cancel</button>
        </form>
      </div>
    );
  }
}
