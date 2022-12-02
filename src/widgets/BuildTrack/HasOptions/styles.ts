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
  margin-top: 0.7rem;
  box-shadow: 0px 2px 2px rgba(137, 218, 255, 0.44);
  border-radius: 0.6rem;
  .tags {
    font-size: 0.7rem;
    background-color: #daf9ee;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important ;
    padding: 0rem;
  }

  .tag-input {
    font-size: 0.8rem;
  }

  .option-button {
    border-color: #6b9dc6;
    color: #445b94;

    &:hover {
      background-color: #d1e3f4;
    }
  }

  /* @media (min-width: 1919px) {
    border: 0.1rem dashed #8bc3af;
  } */
`;

export const Column = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
`;
