import styled from "styled-components";

export const Container = styled.div`
    width: 26rem;
    height: 100vh;
    padding: 1.7rem;
    overflow-y: scroll;
    box-sizing: border-box;

    * {
        scrollbar-width: thin;
        scrollbar-color: #ffb8bfff !important;
    }
    /* Chrome, Edge, and Safari */
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: rgba(241, 243, 245, 0) !important;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(75,161,234, .2);
        border-radius: 10px;
        border: none;
    }
`;
