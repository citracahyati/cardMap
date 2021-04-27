import React, { Component } from "react";
import "../Product/Product.css";

class CardProduct extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };

  render() {
    return (
      <div className="Card">
        <div className="img-thumb-prod">
          <img src="" alt="" />
        </div>
        <p className="product-title">Daging ayam bumbu original</p>
        <p className="product-price">39.900</p>
        <p className="counter" />
        <button className="minus" onClick={this.handleMinus}>
          -
        </button>
        <input type="text" value={this.state.order} />
        <button className="plus" onClick={this.handlePlus}>
          +
        </button>
      </div>
    );
  }
}
export default CardProduct;
