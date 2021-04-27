import React from "react";
import "./YoutubeComp.css";

const YoutubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img
          src="https://i.ytimg.com/vi/Ginx7WKq5GE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU8M7THkkrnYTCcXIVeH5szmX3NA"
          alt=""
        />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YoutubeComp.defaultProps = {
  time: "00.00",
  title: "Title here",
  desc: "2x ditonton, 2 hari lalu",
};

export default YoutubeComp;
