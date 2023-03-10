import styled from "styled-components";

export const NewPollingUnitContainer = styled.div`
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

  .link{
    color: black;
    cursor: pointer;
  }


  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;

   .container {
    width: 90%;
    margin: 30px auto;
  }
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

  .input {
    border: 1px solid #000000;
    padding: 10px;
    font-size: 16px;
    width: 90%;
    display: flex;
    justify-content: start;
    margin-bottom: 20px;
  }

  .err-input {
    border: 1px solid red;
    padding: 10px;
    font-size: 16px;
    width: 90%;
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

  .drop-down {
    font-family: "DM Sans", sans-serif;
    padding: 10px;
    font-size: 16px;
    width: 95%;
    display: flex;
    justify-content: start;
    cursor: pointer;
  }

  .table {
    width: 90%;
    overflow-x: scroll;
  }

  .polling-units{
    font-family: "DM Sans", sans-serif;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin: 10px 0px;
    background-color: #F1F1F1;
    width: 85%;
  }
}


`;
