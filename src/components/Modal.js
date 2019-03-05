import React from 'react';

function Modal(props) {

  return (
    <div className={props.active}>
      <div className="modal-background"></div>
      <div className="modal-card">
      <section className="modal-card-body">
        <p className="has-text-centered is-size-4">Sorry, game over.  Try again?</p>
        <br />
        <button className="button is-dark" onClick={props.close}>Okay</button>
      </section>
      </div>
    </div>
  );
}



export default Modal;