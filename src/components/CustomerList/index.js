// == Import : npm
import React from 'react';

// == Import : style
import './list.scss';


// == Composant
class CustomerList extends React.Component {

  state = {
    clients: [
      { id: 1, name: "Jerem" },
      { id: 2, name: "Gael" },
      { id: 3, name: "Damien" },
      { id: 4, name: "Flo" }
    ]
  };

  handleClick = () => {
    console.log(this.state);
  }

  render() {
    const title = "* Customer list *"
    
    return (
      <div>     
        <h2>{title}</h2>
        <button onClick={this.handleClick}>Click me</button>
        <ul>
          {this.state.clients.map(customer => (
            <li>
              {customer.name} <button>X</button>
            </li>
          ))}
        </ul>
        <form>
          <input type="text" placeholder="add a new customer"></input>
          <button>confirm</button>
        </form>
      </div>
    );
  } 
}

// == Export
export default CustomerList;