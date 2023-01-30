import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { CheckPollingUnitsContainer } from "./check-polling-units.styles";

const CheckPollingUnits = () => {
  const [partyScore, setPartyScore] = useState({
    PDP: 0,
    DPP: 0,
    ACN: 0,
    PPA: 0,
    CDC: 0,
    JP: 0,
    ANPP: 0,
    LABOUR: 0,
    CPP: 0,
  });
  const [error, setError] = useState(false);
  const [table, setTable] = useState(false);
  const [pollingName, setPollingName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [formErr, setFormErr] = useState(false);

  const getPollingUnitResults = (name) => {
    setLoading(true);
    const userData = {
      polling_unit_name: name,
    };
    axios
      .post("https://energetic-hare-wig.cyclic.app/api/election/pollingresults", userData)
      .then(function (response) {
        if (response.data.results.length === 0) {
          setError(true);
        } else {
          setError(false);
        }
        const parties = {
          PDP: 0,
          DPP: 0,
          ACN: 0,
          PPA: 0,
          CDC: 0,
          JP: 0,
          ANPP: 0,
          LABOUR: 0,
          CPP: 0,
        };
        response.data.results.map((result) => {
          if (result.party_abbreviation.trim() === "PDP") {
            parties.PDP = result.party_score;
          }
          if (result.party_abbreviation.trim() === "DPP") {
            parties.DPP = result.party_score;
          }
          if (result.party_abbreviation.trim() === "ACN") {
            parties.ACN = result.party_score;
          }
          if (result.party_abbreviation.trim() === "PPA") {
            parties.PPA = result.party_score;
          }
          if (result.party_abbreviation.trim() === "CDC") {
            parties.CDC = result.party_score;
          }
          if (result.party_abbreviation.trim() === "JP") {
            parties.JP = result.party_score;
          }
          if (result.party_abbreviation.trim() === "ANPP") {
            parties.ANPP = result.party_score;
          }
          if (result.party_abbreviation.trim() === "LABOUR") {
            parties.LABOUR = result.party_score;
          }
          if (result.party_abbreviation.trim() === "CPP") {
            parties.CPP = result.party_score;
          }
        });

        if (Object.keys(parties).length > 0) {
          setPartyScore({
            ...partyScore,
            PDP: parties.PDP,
            DPP: parties.DPP,
            ACN: parties.ACN,
            PPA: parties.PPA,
            CDC: parties.CDC,
            JP: parties.JP,
            ANPP: parties.ANPP,
            LABOUR: parties.LABOUR,
            CPP: parties.CPP,
          });
          setTable(true);
          setLoading(false);
        }
      })
      .catch(function (error) {
        console.log(error);
        setError(true);
        setErrorMessage(error.response.data.error);
        setLoading(false);
      });
  };

  const loadResultsPage = () => {
   window.location.href = "https://election-results.netlify.app/lga/results";
  };

  const loadPollingPage = () => {
   window.location.href = "https://election-results.netlify.app/new/pollingunit";
  };

  const defaultField = {
    polling_unit_name: "",
  };

  const [credentials, setCredentials] = useState(defaultField);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    setFormErr(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.polling_unit_name === "") {
      setFormErr(true);
      return;
    } else {
      setFormErr(false);
    }
    getPollingUnitResults(credentials.polling_unit_name.trim());
    setPollingName(credentials.polling_unit_name);
  };
  return (
    <CheckPollingUnitsContainer>
      <div className="main">
      <div className="label-2">Get Results For Elections Conducted in Delta State in 2011</div>
        <div className="search">
          <div className="label">Enter Polling Unit Name (e.g Ishere Primary School  Aghara)</div>
          <input
            className={formErr ? "err-input" : "input"}
            name="polling_unit_name"
            onChange={handleChange}
            type="text"
          />
          {formErr ? (
            <div className="err-text">Please fill out this field</div>
          ) : (
            ""
          )}
          <div className="buttons">
          <button className="btn" onClick={(e) => handleSubmit(e)}>
            {loading ? "loading..." : "Submit"}
          </button>
          <button className="btn" onClick={loadResultsPage}>
            Total results
          </button>
          <button className="btn" onClick={loadPollingPage}>
            New polling unit
          </button>
          </div>
          
        </div>
        {error === false && table === true ? (
          <div className="table">
            <div className="label">Election results for {pollingName}</div>
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
                <td>Party Score</td>
                <td>
                  {Object.keys(partyScore).length > 0 ? partyScore.PDP : 0}
                </td>
                <td>{partyScore.DPP ? partyScore.DPP : 0}</td>
                <td>{partyScore.ACN ? partyScore.ACN : 0}</td>
                <td>{partyScore.PPA ? partyScore.PPA : 0}</td>
                <td>{partyScore.CDC ? partyScore.CDC : 0}</td>
                <td>{partyScore.JP ? partyScore.JP : 0}</td>
                <td>{partyScore.ANPP ? partyScore.ANPP : 0}</td>
                <td>{partyScore.LABOUR ? partyScore.LABOUR : 0}</td>
                <td>{partyScore.CPP ? partyScore.CPP : 0}</td>
              </tr>
            </table>
          </div>
        ) : (
          <div className="err">{errorMessage ? errorMessage : ""}</div>
        )}
      </div>
    </CheckPollingUnitsContainer>
  );
};

export default CheckPollingUnits;
