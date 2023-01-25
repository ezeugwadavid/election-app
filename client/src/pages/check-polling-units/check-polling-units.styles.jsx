import styled from "styled-components";

export const CheckPollingUnitsContainer = styled.div`
  .main {
    width: 90%;
    margin: 30px auto;
  }
  .label {
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 31px;
    color: #000000;
    margin-bottom: 4px;
    text-align: left;
  }

  .err {
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 31px;
    color: #000000;
    margin-bottom: 4px;
    text-align: left;
  }

  .input {
    border: 1px solid #000000;
    padding: 10px;
    font-size: 16px;
    width: 75%;
    display: flex;
    justify-content: start;
  }

  .err-input {
    border: 1px solid red;
    padding: 10px;
    font-size: 16px;
    width: 75%;
    display: flex;
    justify-content: start;
  }

  .err-text {
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 31px;
    color: red;
    margin-bottom: 4px;
    text-align: left;
  }

  .input:focus {
    border: 1px solid #000000;
  }

  .btn {
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 50px;
    padding: 10px;
    width: 70px;
    background-color: #4d90fe;
    color: #ffffff;
    border: 1px solid #4d90fe;
    display: flex;
    justify-content: start;
  }

  table {
    width: 80%;
  }
  tr {
    text-align: left;
    border-radius: 5px;
    font-family: "Source Sans 3", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    /* or 22px */
    color: #333333;
  }
  th {
    padding: 10px;
    font-family: "Source Sans 3", sans-serif;
    font-size: 16px;
    line-height: 140%;
  }
  td {
    padding: 10px;
    text-align: left;
  }
  table,
  tr {
    border: 1px solid #bfbfbf;
    border-collapse: collapse;
    padding: 10px;
  }
`;
