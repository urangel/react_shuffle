import React, { Component } from 'react'
import Card from "./Card";
import images from "../zeoImg.json";

const style= {
  container: {
    marginLeft: "160px", 
    padding: "0px 10px",
  },
  row:{
    display: "flex"
  },
  h1: {
    fontFamily: "sSharp",
    fontSize: "100px",
    fontWeight: 500
  }
}

export class CardContainer extends Component {
  render() {
    return (
      <div className="container" style={style.container}>
        <h1 style={style.h1}>Z-O-LITE</h1>
        <div className="row" style={style.row}>
          {/* map card info into cards component */}
          {images.map(image => <Card id={image.id} src={image.src} alt={image.img} />)}
        </div>
      </div>
    )
  }
}

export default CardContainer
