import React from 'react';

function ButtonIcon(props) {
  return (
    <button className="button is-large is-success is-size-3-tablet is-size-2-desktop"><i className={props.icon}></i></button>
  );
}

export default ButtonIcon;