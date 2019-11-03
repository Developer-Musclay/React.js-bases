// == Import : npm
import React from 'react';

// == Import : local
import Customer from '../Customer';
import CustomerForm from '../CustomerForm';

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

  handleDelete = (id) => {
    const clients = [...this.state.clients];
    const index = clients.findIndex(customer => customer.id === id);

    clients.splice(index, 1);

    this.setState({ clients });
  };

  handleAdd = customer => {
    const clients = [...this.state.clients];
    clients.push(customer);

    this.setState({ clients });
  }

  render() {
    const title = "* Customer list *"
    
    return (
      <div className="list">     
        <h2>{title}</h2>
        <ul>
          {this.state.clients.map(customer => (
            <Customer details={customer} onDelete={this.handleDelete}/>
          ))}
        </ul>
        <CustomerForm onCustomerAdd={this.handleAdd} />    
      </div>
    );
  } 
}

// == Export
export default CustomerList;