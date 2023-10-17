import React from 'react';

const TableComponent = ({ data }) => {
  // Assuming `data` is an array of objects with the same structure
  const columns = Object?.keys(data[0]);
  console.log("hiii");
  return (
    <table style={{ border: '1px solid #cccccc' }}>
      <thead>
        <tr>
          {columns?.map((column) => (
            <th key={column} style={{ color: 'blue', border: '1px solid #cccccc', align: 'left'}}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, index) => (
          <tr key={index} style={{border: '1px solid #cccccc'}}>
            {columns?.map((column) => (
              <td key={column} style={{border: '1px solid #cccccc'}}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
