import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  width: 26rem;
  height: calc(100vh - 2.5rem);
  padding: 0rem 1.7rem;
  overflow-y: scroll;
  box-sizing: border-box;
  background-color: #f7f7f7;
  padding-bottom: 1rem;

  * {
    scrollbar-width: thin;
    scrollbar-color: #ffb8bfff !important;
  }
  /* Chrome, Edge, and Safari */
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(241, 243, 245, 0) !important;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(75, 161, 234, 0.2);
    border-radius: 10px;
    border: none;
  }
`;
