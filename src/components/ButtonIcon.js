import React from 'react';

function ButtonIcon(props) {
  return (
    <button 
      className="button is-large is-success is-size-3-tablet is-size-2-desktop" 
      onClick={() => props.clickCheck(props.icon)}><i className={props.icon}></i>
    </button>
  );
}

export default ButtonIcon;