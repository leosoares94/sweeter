import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  box-sizing: border-box;
  padding: 0rem 2rem;

  .add-button {
    background-color: #ff4784 !important;
    border: none;
    &:hover {
      background-color: #c23262 !important;
    }

    &:active {
      background-color: #ff4784 !important;
    }
  }
`;

export const Logo = styled.div`
  width: max-content;
  height: max-content;
  font-family: "Pacifico", cursive;
  font-size: 1.5rem;
  color: #ff4784;
`;
