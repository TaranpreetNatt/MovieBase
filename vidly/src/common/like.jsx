import React from 'react';

const Like = (props) => {
  let classes = "fa fa-heart-o";
  if(props.like) classes = "fa fa-heart";
  
  return (
    <i 
      className={ classes }
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick= { props.onLike }
    >
    </i> 
  );
}
 
export default Like;