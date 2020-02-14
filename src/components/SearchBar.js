import React from 'react';
import Input from './Input';
import './SearchBar.css';

function SearchBar(props) {
  return (
    <div className="SearchBar">
      <h4>Search by Email</h4>
      <Input placeholder="Email to search..." value={props.value} onChange={props.onChange} />
    </div>
  );
}

export default SearchBar;
