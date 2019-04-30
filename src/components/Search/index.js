import React, { useState } from 'react';

export function Search({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ searchTerm });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">
        Search
        <input
          id="search"
          type="text"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
