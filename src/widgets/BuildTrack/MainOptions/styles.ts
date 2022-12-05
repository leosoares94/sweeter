import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: max-content;
  background-color: #fff;
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  z-index: 10000;
`;

export const Row = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  border-radius: 0.6rem;
  box-shadow: 0px 2px 2px rgba(255, 137, 137, 0.105);
  border: 1px solid #ff000027 ;

  .tags {
    font-size: 0.7rem;
    background-color: #f9dada;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important ;
    padding: 0rem;
  }

  .tag-input {
    font-size: 0.8rem;
  }

  .option-button {
    border-color: #c66b99;
    color: #b75988;

    &:hover {
      background-color: #f4d1e3;
    }
  }

  .field-container {
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: #ff5a5a14;
  }

  .or-and-btn {
    padding: 0.1rem;
    border-radius: 0.5rem;

    button {
      border: none;
      border-radius: 0.3rem;
      font-size: 0.6rem;
      &:hover {
        background-color: #ffdae6;
      }
    }
  }
`;

export const Column = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
`;
