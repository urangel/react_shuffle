import React from 'react'

const style = {
  sideNav: {
    backgroundColor: "#e6c400",
    height: "100%",
    width: "150px",
    position: "fixed",
    zIndex: 1,
    top: 0,
    left: 0,
    overflowX: "hidden",
    paddingTop: "20px"
  
  },
  restartButton: {
    position: "fixed",
    top: "10px",
    left: "10px",
    fontFamily: "sSharp"
  }
  

}

function Navbar() {
  return (
    <div className="sideNav" style={style.sideNav}>
        {/* <span className="navbar-brand mb-0 h1">Shuffle</span> */}
        <buton className="btn btn-secondary" style={style.restartButton}>Restart</buton>
    </div>
  )
}

export default Navbar
