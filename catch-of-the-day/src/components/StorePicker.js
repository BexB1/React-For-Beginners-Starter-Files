import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  goToStore(event) {
    event.preventDefault();
    console.log("new URL!");

    const storeId = this.storeInput.value;

    this.context.router.transitionTo(`/store/${storeId}`);
  }
  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        { /* I'm a JSX comment. I must go in the parent element, in this syntax */ }
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}}/>
        <button type="submit">Visit Store >></button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;