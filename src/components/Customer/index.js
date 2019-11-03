// == Import : npm
import React, { Component } from "react";

// if a component does not need state management, it does not need a class. A function is enough

// == Composant
const Customer = ({ details, onDelete }) => (
    <li>
      {details.name} <button onClick={() => onDelete(details.id)}>X</button>  
    </li>
  );

// == Export
export default Customer;