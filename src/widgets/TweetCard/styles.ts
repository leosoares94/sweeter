import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
    background-color: #fff;
    padding: 1.5rem;
    box-sizing: border-box;
    border-radius: 0.2rem;
    margin-top: 1rem;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.10);
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
`;

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;

    .username {
        padding-left: 0.5rem;
    }
`;

export const Name = styled.span`
    font-size: 0.9rem;
    font-weight: bold;
    margin-top: 0.3rem;
`;

export const Username = styled.span`
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.5);
    margin-top: -0.3rem;
`;

export const Tweet = styled.span`
    font-size: 1rem;
    padding-top: 1rem;
`;

export const Time = styled.span`
    font-size: .90rem;
    padding-top: 1rem;
    color: rgba(0, 0, 0, 0.5);
`;

export const Source = styled.span`
    font-size: .90rem;
    padding-top: 1rem;
    color: #50a3e8;
`;