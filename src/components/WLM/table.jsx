import React from 'react';

import PropTypes from 'prop-types';

function TableComponent({ tableData }) {
  return (
    <div className='rounded-lg border shadow-2xl w-full'>
      <table className='border-separate'>
        <thead>
          <tr>
            <th className='whitespace-pre px-3'>Frequency (Hz)</th>
            <th className='whitespace-pre px-3'>Radial</th>
            <th className='whitespace-pre px-3'>Tangential</th>
            <th className='whitespace-pre px-3'>Axial</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((data, index) => {
            return (
              <tr key={index}>
                <td className='border px-3'>{data.frequency}</td>
                <td className='border px-3'>{data.radial}</td>
                <td className='border px-3'>{data.tangential}</td>
                <td className='border px-3'>{data.axial}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

TableComponent.propTypes = {
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      frequency: PropTypes.number.isRequired,
      radial: PropTypes.number.isRequired,
      tangential: PropTypes.number.isRequired,
      axial: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default TableComponent;