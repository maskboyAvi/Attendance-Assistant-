import React, { useEffect, useState } from 'react';

const TableComponent = () => {
  const [tb1, setTb1] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/table")
      .then(response => response.json())
      .then(result => {
        
        const transposedData = Object.keys(result[0])
       
          .sort()
          .map(key => ({
            column: key,
            values: result.map(item => item[key])
          }));
        setTb1(transposedData);
      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div>
      <table style={{ color: 'white', fontSize: "20px", border: "2px solid white" }}>
        <thead>
        
        </thead>
        <tbody>
          {tb1.map((item, index) => (
            <tr key={index}>
              <td>{item.column}</td>
              {item.values.map((value, rowIndex) => (
                <td key={rowIndex} style={{backgroundColor:value===1?'green':'red'}}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
