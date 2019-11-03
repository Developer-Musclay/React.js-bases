// == Import : npm
import React, {Component} from "react"

// == Composant
class Customer extends Component {
  render () { 
    const { details, onDelete } = this.props;

    return (
      <li>
        {details.name}
        <button onClick = {() => onDelete(details.id)}>
          X
        </button>
      </li>
    );
  }
}

// == Export
export default Customer;