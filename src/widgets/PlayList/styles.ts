import { url } from "inspector";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 24rem;
  padding: 1rem;
  padding-bottom: 3rem;
  .scroll-container {
    height: 18rem;
    overflow-y: scroll;
    padding-bottom: 1rem ;
    padding-right: 1rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .6rem .5rem;
  border-radius: 0.3rem;
  margin-top: .5rem;
  border: 1px solid #ed64a656; 
  /* background-color: #ed64a624; */
  .indicator {
    justify-content: center;
    padding-left: .2rem;
    opacity:.8 ;
  }

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

  .indicator-label {
    font-size: .6rem;
    margin-left: .1rem;
  }
`;

export const Column = styled.div`
  width: fit-content;
  height: max-content;
  display: flex;
  flex-direction: column;

  button {
    border:  none;
  }

  .title-container {
    padding-left: 0;
  }
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 0.80rem;
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
}

export const ImagePreview = styled.div<ImagePreviewProps>`
  width: 3rem;
  height: 2rem;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
`;
