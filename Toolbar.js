import React from "react"

const Toolbar = (props) => {
  return (
    <div >
      <i title="no-stack-dub-sack" />
      {props.text}
        &emsp;&emsp;&emsp;
      <i className="fas fa-times"  onClick={props.onClick}/>
    </div>
  );
};
export default Toolbar
