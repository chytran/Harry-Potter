import React from 'react';

const Form = props => (
  <form onSubmit={props.getCharacter}>
    <button className="form_button">Press for the Character's Description</button>
  </form>
)

export default Form;