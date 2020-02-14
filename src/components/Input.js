import React from 'react';
import { Input as SemanticUIInput } from 'semantic-ui-react';

function Input(props) {
  const onChange = (e) => {
    props.onChange(e.target.value);
    e.preventDefault();
  };

  return <SemanticUIInput {...props} onChange={onChange} />;
}

export default Input;
