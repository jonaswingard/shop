import React from 'react';
import SectionForm from './section-form';

export class SectionListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      section: {
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

  onSubmit = section => {
    this.setState(() => ({
      isEditing: false
    }));
    this.props.onSubmit(section);
  };

  onRemove = () => {
    this.props.onRemove(this.state.section);
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
            <SectionForm
              section={this.state.section}
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

export default SectionListItem;
