import React from 'react';
import { format } from 'path';

class StorePicker extends React.Component {
  render() {
    return (
      <form class="store-selector">
        { /* I'm a JSX comment. I must go in the parent element, in this syntax */ }
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store >></button>
      </form>
    )
  }
}

export default StorePicker;