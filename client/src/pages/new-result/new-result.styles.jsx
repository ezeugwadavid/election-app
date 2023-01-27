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
    width: 80%;
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
    padding: 10px;
    margin: 10px 0px;
    background-color: #268d5f;
    color: #ffffff;
    width: 73%;
    border-radius: 5px;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    .btn {
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 50px;
    padding: 5px;
    width: 100px;
    background-color: #4d90fe;
    color: #ffffff;
    border: 1px solid #4d90fe;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    font-size: 13px;
    cursor: pointer;
  }

  .container {
    width: 90%;
    margin: 30px auto;
  }

  .input {
    border: 1px solid #000000;
    padding: 10px;
    font-size: 16px;
    width: 90%;
    display: flex;
    justify-content: start;
  }

  .err-input {
    border: 1px solid red;
    padding: 10px;
    font-size: 16px;
    width: 90%;
    display: flex;
    justify-content: start;
  }

  .table {
    width: 90%;
    overflow-x: scroll;
  }

  .drop-down {
    font-family: "DM Sans", sans-serif;
    padding: 10px;
    font-size: 16px;
    width: 96%;
    display: flex;
    justify-content: start;
    cursor: pointer;
  }
}

`;
