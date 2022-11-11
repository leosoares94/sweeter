import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
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
    transform:scale(1.2) ;
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

export const IconContainer = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center ;
    background-color: ${(props: any) => props.color};
    padding:.1rem ;
    border-radius: .3rem;
    color: #fff;
`;

export const Title = styled.span`
    font-weight: 550;
    color: #272727f8;
`;