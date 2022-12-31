import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import Table from 'react-bootstrap/Table';
const Table = () => {
  const [info, setData] = useState([]);
  useEffect(() => {
    fetch('https://gorest.co.in/public/v1/users?page=1')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  const removeData = id => {
    axios.delete(`${id}`).then(res => {
      const del = employees.filter(employee => id !== employee.id);
      setEmployees(del);
    });
  };

  const renderHeader = () => {
    let headerElement = ['id', 'name', 'email', 'gender', 'status', 'action'];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return (
      info.data &&
      info.data.map(({ id, name, email, gender, status }) => {
        return (
           <tr key={id}>
           <td>{id}</td>
             <td>{name}</td>
             <td>{email}</td>
            <td>{gender}</td>
             <td>{status}</td>
            <td className="opration">
             <button onClick={() => onEdit(user)}>Edit</button>
               <button onClick={() => onDelete(user)}>Delete</button>
            </td>
           </tr>
          
        );
      })
    );
  };

  return (
    <div>
      <h1 id="title">React Table</h1>
      <table id="employee">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </div>
  );
};

export default Table;
