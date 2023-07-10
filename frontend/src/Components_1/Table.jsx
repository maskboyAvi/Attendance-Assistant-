import React, { useEffect, useState } from "react";
import tabstyle from "./Tablecss.module.css";
// const TableComponent = () => {
//   const [tb1, setTb1] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/table")
//       .then((response) => response.json())
//       .then((result) => {
//         const transposedData = Object.keys(result[0])

//           .sort()
//           .map((key) => ({
//             column: key,
//             values: result.map((item) => item[key]),
//           }));
//         setTb1(transposedData);
//       })
//       .catch((error) => console.log("error", error));
//   }, []);

//   return (
//     <div>
//       <table
//         style={{ color: "white", fontSize: "20px", border: "2px solid white" }}
//       >
//         <thead></thead>
//         <tbody>
//           {tb1.map((item, index) => (
//             <tr key={index}>
//               <td>{item.column}</td>
//               {item.values.map((value, rowIndex) => (
//                 <td key={rowIndex} style={{backgroundColor:value===1?'green':'red'}}>{value}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//         <tbody>
//           {tb1[0].values.map((_, columnIndex) => (
//             <tr key={columnIndex}>
//               <td>{tb1[columnIndex].column}</td>
//               {tb1.map((item, rowIndex) => (
//                 <td
//                   key={rowIndex}
//                   style={{
//                     backgroundColor:
//                       item.values[columnIndex] === 1 ? "green" : "red",
//                   }}
//                 >
//                   {item.values[columnIndex]}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

const TableComponent = () => {
  const [tb1, setTb1] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/table")
      .then((response) => response.json())
      .then((result) => {
        setTb1(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      {/* table-striped table-dark table-bordered table-hover */}
      {/* <table
          cellSpacing="10"
          cellPadding="10"
          className="table"
        >
          <thead>
            <tr>
              {tb1.length > 0 &&
                Object.keys(tb1[0]).map((key, index) => (
                  <th 
                  scope="col" 
                  key={index}
                  style={{
                    padding: "20px 40px",
                    fontSize: "30px"}}>
                      {key.toUpperCase()}
                      </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {tb1.map((item, index) => (
              <tr scope="row" key={index}>
                {Object.values(item).map((value, index) => (
                  <td
                    key={index}
                    style={{
                      backgroundColor:  "green",
                      padding: "20px 40px",
                    }}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table> */}
      <table cellSpacing="10" cellPadding="10" className={` ${tabstyle['main-tab-1']} table table-dark table-bordered table-hover`}>
        {/* table-striped table-dark table-bordered table-hover */}
        <thead>
          <tr>
            {tb1.length > 0 &&
              Object.keys(tb1[0]).map((key, index) => (
                <th
                  scope="col"
                  key={index}
                  style={{ padding: "20px 40px", fontSize: "30px" }}
                >
                  {key.toUpperCase()}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {tb1.map((item, index) => (
            <tr scope="row" key={index} className={`${tabstyle['tab-row1']} text-center`}>
              {Object.entries(item).map(([key, value], index) => (
                <td
                  key={index}
                  style={{
                    backgroundColor: value == 1 ? "green": (value == 0 ? "red" : ""),
                    padding: "20px 40px",
                  }}
                >
                  {console.log(key,value)}
                  {value == 1? "Present": (value == 0 ? "Absent" : value)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
