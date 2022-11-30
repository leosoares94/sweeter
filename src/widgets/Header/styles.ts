import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  position: fixed;
  box-sizing: border-box;
  padding: 0rem 2rem;
  box-shadow: 0px 3px 4px rgba(255, 137, 137, 0.108);
  z-index: 10;

  .add-button {
    background-color: #ff4784 !important;
    border: none;
    font-size: 0.8rem;
    font-weight: 600;
    border-radius: 2rem;

    &:hover {
      background-color: #c23262 !important;
    }

    &:active {
      background-color: #ff4784 !important;
    }
  }

  @media (max-width: 1368px) {
    zoom: 0.8;

  }
`;

export const Row = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .menu-button {
    border: none;
    &:active {
      border: none;
    }
    &:hover {
      border: none;
    }
    &:focus {
      border: none;
      outline: none !important;
    }
  }
`;

export const Logo = styled.div`
  width: max-content;
  height: max-content;
  font-family: "Pacifico", cursive;
  font-size: 1.5rem;
  color: #ed64a6;
`;
