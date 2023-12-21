
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';
import './Table.css'; 

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default App;
