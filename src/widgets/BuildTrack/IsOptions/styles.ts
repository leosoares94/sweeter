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
  box-shadow: 0px 2px 2px rgba(137, 255, 224, 0.234);
  border-radius: .6rem;
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
    border-color: #6bc69a;
    color: #44947f;

    &:hover {
      background-color: #d1f4ee;
    }
  }
`;

export const Column = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
`;
