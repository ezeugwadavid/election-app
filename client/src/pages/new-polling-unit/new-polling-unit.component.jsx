import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { usePosition } from "use-position";
import { NewPollingUnitContainer } from "./new-polling-unit.styles";

const NewPollingUnit = () => {
  const [lga, setLga] = useState([]);
  const [wards, setWards] = useState([]);
  const [created, setCreated] = useState(false);
  const [pollingUnits, setPollingUnits] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [loading, setLoading] = useState(false);

  const { latitude, longitude, timestamp } = usePosition();

  const [ip, setIp] = useState();

  const getIp = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setIp(data.ip);
  };

  const defaultField = {
    ward: 0,
    lga: 0,
    polling_unit_number: "",
    polling_unit_name: "",
    polling_unit_description: "",
    entered_by_user: "",
  };

  const [credentials, setCredentials] = useState(defaultField);
  const createPollingUnit = () => {
    setLoading(true);
    const userData = {
      polling_unit_id: 88,
      ward_id: credentials.ward,
      lga_id: credentials.lga,
      uniquewardid: 7,
      polling_unit_number: credentials.polling_unit_number,
      polling_unit_name: credentials.polling_unit_name,
      polling_unit_description: credentials.polling_unit_description,
      lat: latitude,
      long: longitude,
      entered_by_user: credentials.entered_by_user,
      date_entered: "2023-02-26 15:44:03",
      user_ip_address: ip,
    };
    console.log(userData);

    axios
      .post("http://localhost:5000/api/election/pollingunit", userData)
      .then(function (response) {
        setCreated(true);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
  const getWards = () => {
    const data = {
      lga_id: parseInt(credentials.lga),
    };
    axios
      .post("http://localhost:5000/api/election/wards", data)
      .then(function (response) {
        setWards(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getPollingUnits = () => {
    const data = {
      polling_unit_id: 88,
    };
    axios
      .post("http://localhost:5000/api/election/allpollingunits", data)
      .then(function (response) {
        setPollingUnits(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const loadPage = (id) => {
    window.location.href = `http://localhost:3000/new/results?id=${id}`
  };

  const handleChange = (e) => {
    setError(false);
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.polling_unit_name === "") {
      setError(true);
      setErrorMessage({ polling_unit_name: "Please fill out this field" });
      return;
    }
    if (credentials.polling_unit_number === "") {
      setError(true);
      setErrorMessage({ polling_unit_number: "Please fill out this field" });
      return;
    }
    if (credentials.polling_unit_description === "") {
      setError(true);
      setErrorMessage({
        polling_unit_description: "Please fill out this field",
      });
      return;
    }

    if (credentials.entered_by_user === "") {
      setError(true);
      setErrorMessage({ entered_by_user: "Please fill out this field" });
      return;
    }

    createPollingUnit();
    getPollingUnits();
  };

  useEffect(() => {
    getLga();
    getIp();
    getPollingUnits();
  }, []);

  useEffect(() => {
    getWards();
  }, [credentials.lga]);

  return (
    <NewPollingUnitContainer>
      <div className="container">
        <div className="heading">Create New Polling Unit</div>
        <div className="form-field">
          <div className="label">Enter Polling Unit Name</div>
          <input
            className={error ? "err-input" : "input"}
            name="polling_unit_name"
            type="text"
            onChange={handleChange}
          />
          {error ? (
            <div className="err-text">{errorMessage.polling_unit_name}</div>
          ) : (
            ""
          )}
        </div>
        <div className="form-field">
          <div className="label">Enter Polling Unit Number</div>
          <input
            className={error ? "err-input" : "input"}
            name="polling_unit_number"
            type="text"
            onChange={handleChange}
          />

          {error ? (
            <div className="err-text">{errorMessage.polling_unit_number}</div>
          ) : (
            ""
          )}
        </div>

        <div className="form-field">
          <div className="label">Enter Polling Unit Description</div>
          <input
            className={error ? "err-input" : "input"}
            name="polling_unit_description"
            type="text"
            onChange={handleChange}
          />
          {error ? (
            <div className="err-text">
              {errorMessage.polling_unit_description}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="form-field">
          <div className="label">Name Of Offical</div>
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

        <div className="form-field">
          <div className="label">Select LGA</div>
          <select
            className="drop-down"
            name="lga"
            value={credentials.lga}
            onChange={handleChange}
          >
            {lga.map((lg) => {
              return (
                <option key={lg.lga_id} value={lg.lga_id}>
                  {lg.lga_name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-field">
          <div className="label-ward">Select Ward</div>
          <select
            className="drop-down"
            name="ward"
            value={credentials.ward}
            onChange={handleChange}
          >
            {wards.map((ward) => {
              return (
                <option key={ward.uniqueid} value={ward.ward_id}>
                  {ward.ward_name}
                </option>
              );
            })}
          </select>
        </div>

        <button className="btn" onClick={(e) => handleSubmit(e)}>
          {loading ? "loading..." : "Submit"}
        </button>

        {pollingUnits.length > 0
          ? pollingUnits.map((polUnit) => {
              return (
                <div className="polling-units">
                  <div className="name">{polUnit.polling_unit_name}</div>
                  <Link
                    to={`/new/results?id=${polUnit.uniqueid}`}
                    className="link"
                    onClick={() => loadPage(polUnit.uniqueid)}
                  >
                    Submit New Result
                  </Link>
                </div>
              );
            })
          : ""}
      </div>
    </NewPollingUnitContainer>
  );
};

export default NewPollingUnit;
