import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem 1.5rem;
    padding-top: 1rem;
    box-sizing: border-box;
`;

export const Container = styled.div`
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 3px 10px rgba(255, 137, 137, 0.112);
    border-radius: 2rem;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0rem 1rem;
    background-color: #fff;
    .refresh-button {
        cursor: pointer;
    }

    .options-button {
        cursor: pointer;
    }
`;

export const Title = styled.span``;
