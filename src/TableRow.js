
import React from 'react';

function TableRow({ row, onClick }) {
  return (
    <tr onClick={onClick}>
      <td>{row._id || row.id}</td>
      <td>{row.firstName}</td>
      <td>{row.lastName}</td>
      <td>{row.email}</td>
      <td>{row.phone}</td>
    </tr>
  );
}

export default TableRow;
