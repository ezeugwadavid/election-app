import React, { useState, useEffect } from "react";
import axios from "axios";
import { TotalResultsContainer } from "./total-results.styles";

const TotalResults = () => {
  const [lga, setLga] = useState([]);
  const [value, setValue] = useState("1");
  const [totalResults, seTotalResults] = useState({});
  const [table, setTable] = useState(false);
  const [loading, setLoading] = useState(false);

  const getLga = () => {
    axios
      .get("http://localhost:5000/api/election/lga")
      .then(function (response) {
        setLga(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getTotalResults = () => {
    setLoading(true);
    const userData = {
      lga_id: value,
    };
    axios
      .post("http://localhost:5000/api/election/totalresults", userData)
      .then(function (response) {
        seTotalResults(response.data.results);
        setLoading(false);
        setTable(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    getTotalResults();
  };

  useEffect(() => {
    getLga();
  }, []);

  return (
    <TotalResultsContainer>
      <div className="container">
        <div className="select">
          <div className="label">
            Select the LGA to get the total election results for that LGA
          </div>

          <select className="drop-down" value={value} onChange={handleChange}>
            {lga.map((lg) => {
              return (
                <option key={lg.lga_id} value={lg.lga_id}>
                  {lg.lga_name}
                </option>
              );
            })}
          </select>
          <button className="btn" onClick={(e) => handleSubmit(e)}>
            {loading ? "loading..." : "Submit"}
          </button>
        </div>

        {table ? (
          <div className="table">
            <table>
              <tr>
                <th>Title</th>
                <th>PDP</th>
                <th>DPP</th>
                <th>ACN</th>
                <th>PPA</th>
                <th>CDC</th>
                <th>JP</th>
                <th>ANPP</th>
                <th>LABOUR</th>
                <th>CPP</th>
              </tr>
              <tr>
                <td>Total Results</td>
                <td>{totalResults.PDP}</td>
                <td>{totalResults.DPP ? totalResults.DPP : 0}</td>
                <td>{totalResults.ACN ? totalResults.ACN : 0}</td>
                <td>{totalResults.PPA ? totalResults.PPA : 0}</td>
                <td>{totalResults.CDC ? totalResults.CDC : 0}</td>
                <td>{totalResults.JP ? totalResults.JP : 0}</td>
                <td>{totalResults.ANPP ? totalResults.ANPP : 0}</td>
                <td>{totalResults.LABOUR ? totalResults.LABOUR : 0}</td>
                <td>{totalResults.CPP ? totalResults.CPP : 0}</td>
              </tr>
            </table>
          </div>
        ) : (
          ""
        )}
      </div>
    </TotalResultsContainer>
  );
};

export default TotalResults;
