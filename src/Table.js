
import React, { useState, useEffect } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import _ from 'lodash';

function Table({ data }) {
  const [sortedField, setSortedField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);
  const [filteredData, setFilteredData] = useState(data);

// Sort
const sortedData = [...filteredData].sort((a, b) => {
    const valueA = sortedField === 'id' ? a[sortedField] : _.get(a, sortedField);
    const valueB = sortedField === 'id' ? b[sortedField] : _.get(b, sortedField);
  
    if (sortedField === 'id' || sortedField === 'phone') {
      return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
    } else {
      const stringA = String(valueA).toLowerCase();
      const stringB = String(valueB).toLowerCase();
      return sortOrder === 'asc' ? stringA.localeCompare(stringB) : stringB.localeCompare(stringA);
    }
  });
  
  
  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);


  const handleHeaderClick = (field) => {
    setSortedField(field);
    setSortOrder((prevSortOrder) => (field === sortedField ? (prevSortOrder === 'asc' ? 'desc' : 'asc') : 'asc'));
  };


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedRow(null);
  };


  const handleSearch = () => {
    setCurrentPage(1);
    setFilteredData(data.filter((row) =>
      Object.values(row).some(
        (value) =>
          value &&
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    ));
  };

  
  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  // Clear selectedRow on currentPage change
  useEffect(() => {
    setSelectedRow(null);
  }, [currentPage]);


  useEffect(() => {
    setFilteredData(data.filter((row) =>
      Object.values(row).some(
        (value) =>
          value &&
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    ));
  }, [searchTerm, data]);

  return (
    <div>
      {/* Search input and button */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Найти</button>

      {/* Table */}
      <table>
        <TableHeader
          onHeaderClick={handleHeaderClick}
          sortedField={sortedField}
          sortOrder={sortOrder}
        />
        <tbody>
          {currentItems.map((row) => (
            <TableRow
              key={row._id || row.id}
              row={row}
              onClick={() => handleRowClick(row)}
            />
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div>
        {Array.from(
          { length: Math.ceil(filteredData.length / itemsPerPage) },
          (_, index) => (
            <button key={index} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>

      {/* Selected row details */}
      {selectedRow && (
        <div>
          <h2>Selected Row Details</h2>
          <p>ID: {selectedRow._id || selectedRow.id}</p>
          <p>First Name: {selectedRow.firstName}</p>
          <p>Last Name: {selectedRow.lastName}</p>
          <p>Email: {selectedRow.email}</p>
          <p>Phone: {selectedRow.phone}</p>
        </div>
      )}
    </div>
  );
}

export default Table;
