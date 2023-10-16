import React, { useEffect, useState } from "react";
import tabstyle from "./Tablecss.module.css";

const TableComponent = () => {
  const [tb1, setTb1] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);  

  useEffect(() => {
    fetch("http://localhost:8080/table")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        const data = result.map((item) => {
          const { id, rollNo,longitude,latitude,_16_10_2023 } = item;
          setLatitude(latitude);
          setLongitude(longitude);
          // Add . to id at the end of the string
          const SId= item.id + ".";
          return { SId, rollNo,_16_10_2023 };
        });
        setTb1(data);
        console.log(data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const showMaps = (e) =>{
    e.preventDefault();
    setShowMap(true);
  }

  const renderMap = () => {
    if (showMap) {
      const iframeHtml = `
        <iframe
          width="400"
          height="400"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBg4B-CHlDawAIszvb7aZm9r-la0Fy2JZg&q=${latitude},${longitude}&zoom=16"
          allowFullScreen
          title="Map"
        ></iframe>
      `;
      return <div dangerouslySetInnerHTML={{ __html: iframeHtml }} />;
    }
    return null;
  };

  return (
    <div>
      <table
        cellSpacing="10"
        cellPadding="10"
        className={` ${tabstyle["main-tab-1"]} table table-dark table-bordered`}
      >
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
              <th style={{ padding: "20px 40px", fontSize: "30px" }}>Location</th>
          </tr>
        </thead>
        <tbody>
          {tb1.map((item, index) => (
            <tr
              scope="row"
              key={index}
              className={`${tabstyle["tab-row1"]} text-center`}
            >
              {Object.entries(item).map(([key, value], index) => (
                <>
                  <td
                    key={index}
                    style={{
                      backgroundColor:
                        value === 1 ? "green" : value === 0 ? "red" : "",
                      padding: "20px 40px",
                    }}
                  >
                    {value === 1 ? "Present" : value === 0 ? "Absent" : value}
                  </td>
                  {value === 1 && (
                    <td
                      key={`${index}-button`}
                      style={{ padding: "10px 20px" }}
                    >
                      <button onClick={showMaps} style={{backgroundColor:"yellow",color:"black",cursor:"pointer"}}>See Location</button>{" "}
                      {/* Add your button component here */}
                    </td>
                  )}
                  {value === 0 && (
                    <td
                      key={`${index}-button`}
                      style={{ padding: "10px 20px" }}
                    >
                      <button disabled style={{backgroundColor:"orange",color:"black" ,opacity:"50%"}}>See Location</button>{" "}
                      {/* Add your button component here */}
                    </td>
                  )}
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {renderMap()}
    </div>
  );
};

export default TableComponent;
