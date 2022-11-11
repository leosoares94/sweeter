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
    justify-content: flex-start ;
    align-items:center ;
    flex-direction: row;
`;

export const Column = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
`;
