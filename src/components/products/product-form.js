import React from 'react';
import SectionDropdown from '../sections/section-dropdown';

export default class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.product ? props.product.name : '',
      sectionId: props.product ? props.product.sectionId : '',
      error: ''
    };
  }

  onNameChange = e => {
    const name = e.target.value;
    this.setState(prevState => ({ ...prevState, name }));
  };

  onSubmit = e => {
    e.preventDefault();
    const product =
      this.props.product && this.props.product.id
        ? {
            id: this.props.product.id,
            name: this.state.name,
            sectionId: this.state.sectionId
          }
        : { name: this.state.name, sectionId: this.state.sectionId };
    this.props.onSubmit(product);
    this.setState(() => ({ error: '', name: '', sectionId: '' }));
  };

  onCancel = () => {
    this.props.onCancel();
  };

  onSectionChange = e => {
    const sectionId = e.target.value;
    this.setState(prevState => ({ ...prevState, sectionId }));
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input value={this.state.name} onChange={this.onNameChange} />
          <SectionDropdown
            foobar={this.state.sectionId}
            onChange={this.onSectionChange}
          />
          <button>Save</button>
          <button type="button" onClick={this.onCancel}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}
