import styled from "styled-components";

export const Wrapper = styled.div`
  height: 20rem;
  padding: 0.5rem;
`;

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #ff000023;
  .avatar-container {
    justify-content: center;
    align-items: center;
    padding-right: 0.5rem;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  width: fit-content;
  height: max-content;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 0.83rem;
`;

export const Description = styled.span`
  font-weight: 500;
  font-size: 0.75rem;
  color: #0000008c;
  margin-top: -0.2rem;
`;
