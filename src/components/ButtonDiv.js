import React from 'react';
import ButtonIcon from './ButtonIcon';

function ButtonDiv(props) {
  return (
    <div className="column is-2">
      <ButtonIcon 
      icon={props.icon}
      clickCheck={props.clickCheck} />
    </div>
  );
}

export default ButtonDiv;