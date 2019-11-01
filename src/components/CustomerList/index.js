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
    ],
    newCustomer: ''
  };

  handleDelete = (id) => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex(customer => customer.id === id);

    clients.splice(index, 1);

    this.setState({ clients: clients });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const id = new Date().getTime();
    const name = this.state.newCustomer;

    const customer = {id: id, name: name};

    const clients = this.state.clients.slice();
    clients.push(customer);

    this.setState({clients: clients, newCustomer: ''});
  }

  handleChange = (event) => {
    const value = event.currentTarget.value;
    this.setState({ newCustomer: value });
  }

  render() {
    const title = "* Customer list *"
    
    return (
      <div className="list">     
        <h2>{title}</h2>
        <ul>
          {this.state.clients.map(customer => (
            <li>
              {customer.name} <button onClick = {() => this.handleDelete(customer.id)}>X</button>
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.newCustomer} onChange={this.handleChange} type="text" placeholder="add a new customer" />
          <button>confirm</button>
        </form>
      </div>
    );
  } 
}

// == Export
export default CustomerList;