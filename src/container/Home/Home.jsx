import React, { Component } from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import Product from "../Product/Product";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <p>Youtube Component</p>
        <hr />
        <YoutubeComp time="7.12" title="Tutorial 1" />
        <YoutubeComp time="9.32" title="Tutorial 2" />
        <YoutubeComp time="6.21" title="Tutorial 3" />
        <YoutubeComp time="6.19" title="Tutorial 4" />
        <YoutubeComp time="18.01" title="Tutorial 5" />
        <p>Counter</p> */}
        <hr />
        <Product />
      </div>
    );
  }
}

export default Home;
