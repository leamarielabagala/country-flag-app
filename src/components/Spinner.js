import React from 'react';
import { Loader } from 'semantic-ui-react';
import './Spinner.css';

function Spinner() {
  return (
    <div className="Spinner">
      <Loader active inline>Loading</Loader>
    </div>
  );
}

export default Spinner;
