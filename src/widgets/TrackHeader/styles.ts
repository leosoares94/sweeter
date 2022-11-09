import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 1.5rem;
  box-sizing: border-box;
`;

export const Container = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(231, 244, 255);
  border-radius: 0.4rem;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  font-size: 0.8rem;
  padding: 0rem 1rem;

  .refresh-button {
    cursor: pointer;
  }

  .options-button {
    cursor: pointer;
  }
`;

export const Title = styled.span``;
