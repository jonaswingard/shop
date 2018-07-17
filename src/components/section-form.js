import React from 'react';
export default class SectionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.section ? props.section.name : '',
      error: ''
    };
  }

  onNameChange = e => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  onSubmit = e => {
    e.preventDefault();
    const section =
      this.props.section && this.props.section.id
        ? { id: this.props.section.id, name: this.state.name }
        : { name: this.state.name };
    this.props.onSubmit(section);
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
