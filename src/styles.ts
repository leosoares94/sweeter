import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;

    background: repeating-linear-gradient(
        -45deg,
        #ffb7dd1b,
        #ffb7dd20 2px,
        #ffffff1f 2px,
        #ffffff28 11px
    );
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    padding-top: 3rem;
    opacity: 1 !important;
`;
