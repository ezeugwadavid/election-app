import styled from "styled-components";

export const NewResultContainer = styled.div`
  .container {
    width: 50%;
    margin: 30px auto;
  }
  .heading{
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 23px;
    line-height: 31px;
    color: #000000;
    margin-bottom: 30px;
    display: flex;
    justify-content: start;
  }
  .label {
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 31px;
    color: #000000;
    margin-bottom: 4px;
    text-align: left;
  }
  .label-ward {
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 31px;
    color: #000000;
    margin-bottom: 4px;
    margin-top: 20px;
    text-align: left;
  }

  .input {
    border: 1px solid #000000;
    padding: 10px;
    font-size: 16px;
    width: 75%;
    display: flex;
    justify-content: start;
    margin-bottom: 20px;
  }

  .drop-down {
    font-family: "DM Sans", sans-serif;
    padding: 10px;
    font-size: 16px;
    width: 78%;
    display: flex;
    justify-content: start;
    cursor: pointer;
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

  .polling-units{
    font-family: "DM Sans", sans-serif;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin: 10px 0px;
    background-color: #F1F1F1;
    width: 75%;
  }

`;
