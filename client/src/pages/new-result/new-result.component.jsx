import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
import { NewResultContainer } from "./new-result.styles";

const NewResult = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);
  const [ip, setIp] = useState();

  const history = useHistory()

  const getIp = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setIp(data.ip);
  };

  const parties = [
    "PDP",
    "DPP",
    "ACN",
    "PPA",
    "CDC",
    "JP",
    "ANPP",
    "LABOUR",
    "CPP",
  ];
  const defaultField = {
    party_abbreviation: "",
    party_score: "",
    entered_by_user: "",
  };

  const [credentials, setCredentials] = useState(defaultField);

  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  const id = urlParams.get("id");

  const submitResult = () => {
    setLoading(true);
    const userData = {
      polling_unit_uniqueid: id,
      party_abbreviation: credentials.party_abbreviation,
      party_score: parseInt(credentials.party_score),
      entered_by_user: credentials.entered_by_user,
      date_entered: "2023-02-27 15:44:03",
      user_ip_address: ip,
    };

    axios
      .post("https://energetic-hare-wig.cyclic.app/api/election/pollresults", userData)
      .then(function (response) {
        setCreated(true);
        setLoading(false); 
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setError(false);
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.party_score === "") {
      setError(true);
      setErrorMessage({ party_score: "Please fill out this field" });
      return;
    }
    if (credentials.entered_by_user === "") {
      setError(true);
      setErrorMessage({ entered_by_user: "Please fill out this field" });
      return;
    }
    submitResult();
  };

  useEffect(() => {
    getIp();
  }, []);

  return (
    <NewResultContainer>
      <div className="container">
        <div className="container">
          <div className="heading">Submit New Polling Unit Result</div>
          <div className="form-field">
            <div className="label">Select Party</div>
            <select
              className="drop-down"
              name="party_abbreviation"
              value={credentials.party_abbreviation}
              onChange={handleChange}
            >
              {parties.map((party) => {
                return (
                  <option key={party} value={party}>
                    {party}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-field">
            <div className="label">Enter Score</div>
            <input
              className={error ? "err-input" : "input"}
              name="party_score"
              type="text"
              onChange={handleChange}
            />

            {error ? (
              <div className="err-text">{errorMessage.party_score}</div>
            ) : (
              ""
            )}
          </div>

          <div className="form-field">
            <div className="label">Official Name</div>
            <input
              className={error ? "err-input" : "input"}
              name="entered_by_user"
              type="text"
              onChange={handleChange}
            />

            {error ? (
              <div className="err-text">{errorMessage.entered_by_user}</div>
            ) : (
              ""
            )}
          </div>

          <button className="btn" onClick={(e) => handleSubmit(e)}>
            {loading ? "loading..." : "Submit"}
          </button>
          
          {
            created ?
          <div className="polling-units">
              Results has been recorded 
          </div>
          :
          ''
          }


        </div>
      </div>
    </NewResultContainer>
  );
};

export default NewResult;
