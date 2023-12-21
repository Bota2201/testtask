
import React from 'react';

function TableHeader({ onHeaderClick, sortedField, sortOrder }) {
  const headers = [
    { field: 'id', label: 'ID' },
    { field: 'firstName', label: 'First Name' },
    { field: 'lastName', label: 'Last Name' },
    { field: 'email', label: 'Email' },
    { field: 'phone', label: 'Phone' },
  ];

  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header.field} onClick={() => onHeaderClick(header.field)}>
            {header.label}
            {sortedField === header.field && (
              <span>{sortOrder === 'asc' ? ' ▲' : ' ▼'}</span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
