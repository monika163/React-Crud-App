import React from 'react';

const DataItem = ({ data, onEdit, onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th colspan="3">Gender</th>
        <th colspan="2">status</th>
      </tr>
    </thead>
    <tbody>
      {data.map(user => (
        <tr key={user.name}>
          <td>{user.name}</td>
          <td colspan="2">{user.email}</td>
          <td colspan="2">{user.gender}</td>
          <td colspan="2">{user.status}</td>
          <td>
            <button onClick={() => onEdit(user)}>Edit</button>
          </td>
          <td>
            <button onClick={() => onDelete(user)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default DataItem;
