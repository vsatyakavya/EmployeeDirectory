

import React from "react";
const styles ={
  bg :{
      backgroundColor : "#9694DA",
    borderRadius  : 20,
      color : "white",
    padding : 40,
    marginBottom :10,
    fontSize :20


  }
}
function Container(props) {
  return <div style={styles.bg} className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Container;
