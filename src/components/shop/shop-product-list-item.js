import React from 'react';

export class ShopProductListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        id: props.id,
        name: props.name,
        sectionId: props.sectionId,
        inCart: props.inCart
      }
    };
  }

  onToggle = e => {
    this.props.onToggle(this.state.product, e.target.checked);
  };

  render() {
    return (
      <li key={this.props.id}>
        <input
          type="checkbox"
          onChange={this.onToggle}
          checked={this.props.inCart ? true : false}
        />
        {this.props.name}
      </li>
    );
  }
}

export default ShopProductListItem;
