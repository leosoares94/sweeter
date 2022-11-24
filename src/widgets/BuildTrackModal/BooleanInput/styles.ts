import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  .tags {
    font-size: 0.7rem;
    background-color: #f9dada;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important ;
    padding: 0rem;
  }

  .tag-input {
    font-size: 0.7rem;
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
        background-color: #ffdae6
      }
    }
  }

  .filter-text {
    font-size: .75rem;
    justify-content:center;
    color: #000000a5;
  }
`;

export const Column = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
`;
