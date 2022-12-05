import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: fit-content;
  height: max-content;
  background-color: #fff;
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  z-index: 10000;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-right: 0.2rem;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  span {
    font-size: 0.5rem;
  }

  .select {
    width: 13.7rem;
    font-size: 0.7rem;
  }

  input {
    height: 0.5rem;
  }
`;

export const Column = styled.div`
  width: 100%;
  height: 19rem;
  display: flex;
  flex-direction: column;
  padding-right: 0.4rem;
  padding-bottom: 0.8rem;
  overflow-y: scroll;
  box-sizing: border-box;

  ::-webkit-scrollbar {
    width: 3px;
    height: 5px;
  }

  
`;

export const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: any) => props.color};
  padding: 0.1rem;
  border-radius: 0.3rem;
  color: #fff;
`;

export const Title = styled.span`
  font-weight: 550;
  color: #272727f8;
`;