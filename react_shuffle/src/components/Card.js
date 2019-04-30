import React from 'react'

const style = {
  width: "10rem",
}

function Card(props) {
  return (
    <div>
      <div className="card" style={style} onClick={props.handleClick}>
        <img className="card-img-top" src={props.src} alt="Card cap"/>
      </div>        
    </div>
  )
}

export default Card

// import React, { Component } from 'react';

// const style = {
//   width: "10rem",
//   float: "left"
// }

// export class Card extends Component {
//   render(props) {
//     return (
//       <div>
//         <div>
//           <div className="card" style={style}>
//             <img className="card-img-top" src={props.src} alt="Card cap"/>
//           </div>        
//         </div>
//       </div>
//     )
//   }
// }

// export default Card
