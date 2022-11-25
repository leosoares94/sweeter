import styled from "styled-components";

interface RowProps {
  includes?: boolean;
}

export const Row = styled.div<RowProps>`
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
    background-color: #ff5a5aff;
  }

  .or-and-btn {
    padding: 0.1rem;
    border-radius: 0.5rem;
    font-size: 0.2rem;
    button {
      border: none;
      border-radius: 0.3rem;

      &:hover {
        background-color: #00000000;
      }
    }
  }

  .filter-text {
    padding: 1rem;
    font-size: 0.75rem;
    justify-content: center;
    color: #000000b7;
  }

  .filter-text-white-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    padding: .5rem;
    border-radius: 1.5rem ;
    outline: solid 1px #00000022 ;
  }
`;

export const Column = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  background-color: #00000004;
  border-radius: 0.3rem;

  button {
    font-size: 0.6rem;
    padding-top: 0.2rem;
    color: #4d9a85eb;
    border: none;
    &:hover {
      background-color: rgba(0, 0, 0, 0.063);
    }
  }
`;
