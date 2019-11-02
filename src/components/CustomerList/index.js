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
    const clients = [...this.state.clients];
    const index = clients.findIndex(customer => customer.id === id);

    clients.splice(index, 1);

    this.setState({ clients });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const id = new Date().getTime();
    const name = this.state.newCustomer;

    const customer = {id, name};

    const clients = [...this.state.clients];
    clients.push({id, name});

    this.setState({clients, newCustomer: ''});
  }

  handleChange = (event) => {
    this.setState({ newCustomer: event.currentTarget.value });
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