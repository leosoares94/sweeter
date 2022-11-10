import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  width: 27rem;
  height: calc(100vh - 5.5rem);
  padding: 0rem 1.7rem;
  overflow-y: scroll;
  box-sizing: border-box;
  background-color: #f7f7f741;
  padding-bottom: 1rem;

  * {
    scrollbar-width: thin;
    scrollbar-color: #ffb8bf9a !important;
  }
  /* Chrome, Edge, and Safari */
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #ff47840e !important;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ff478414;
    border-radius: 10px;
    border: none;
  }
`;
