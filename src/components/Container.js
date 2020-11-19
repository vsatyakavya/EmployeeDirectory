// import React from "react";

// function Container(props) {
//   return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
// }

// export default Container;

import React from "react";
const styles ={
  bg :{
    //  backgroundColor : "#B0E0E6",
    borderRadius  : 20,
    //  color : "white",
    padding : 10,
    marginBottom :10,


  }
}
function Container(props) {
  return <div style={styles.bg} className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Container;
