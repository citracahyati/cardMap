import React, { Component, Fragment } from "react";
import "../Product/Product.css";
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <div className="https://info.etanee.id/wp-content/uploads/2021/01/cropped-cropped-cropped-etanee-biru-1.png"></div>
          </div>
          <div className="troley">
            <div className="img"></div>
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct
          onCounterChange={(value) => this.handleCounterChange(value)}
        />
      </Fragment>
    );
  }
}
export default Product;
