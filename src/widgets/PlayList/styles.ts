import styled from "styled-components";

export const Wrapper = styled.div`
  height: 26rem;
  padding: 0.5rem;
  padding-bottom: 3rem;

  .scroll-container {
    height: 18rem;
    overflow-y: scroll;
    padding-bottom: 1rem;
    padding-right: 1rem;
    padding-left: 0.2rem;
  }

  .modal-body {
    scrollbar-width: 0.05rem !important;
  }

  .modal-title {
    font-size: 0.85rem;
  }
`;

type ContainerProps = {
  containerColor?: {
    primary: string;
    secondary: string;
  };
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0.5rem;
  border-radius: 0.3rem;
  margin-top: 0.5rem;
  background-color: ${({ containerColor }) => containerColor!.primary};

  cursor: pointer;

  &:hover {
    outline: 1px solid #0000003b;
  }

  .indicator {
    justify-content: center;
    padding-left: 0.2rem;
    opacity: 0.8;
  }

  .avatar-container {
    justify-content: center;
    align-items: center;
    padding-right: 0.5rem;
  }

  .options-button {
    font-size: 2rem;
    justify-content: flex-start;
    background-color: none;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .indicator-label {
    font-size: 0.6rem;
    margin-left: 0.1rem;
  }
`;

export const Column = styled.div`
  width: fit-content;
  height: max-content;
  display: flex;
  flex-direction: column;

  button {
    border: none;
  }

  .title-container {
    padding-left: 0;
  }
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 0.75rem;

  color: #000000c4;
`;

export const Description = styled.span`
  font-weight: 500;
  font-size: 0.75rem;
  color: #0000008c;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #00000092;
`;

type ImagePreviewProps = {
  src: string;
};

export const ImagePreview = styled.div<ImagePreviewProps>`
  width: 3rem;
  height: 2rem;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
`;

export const DateInfo = styled.span`
  font-size: 0.6rem;
  color: #00000093;
`;
