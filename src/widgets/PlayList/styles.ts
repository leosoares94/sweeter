import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 27rem;
  padding: 0.5rem;
  padding-bottom: 3rem;

  .scroll-container {
    height: 18rem;
    overflow-y: scroll;
    padding-bottom: 1rem;
    padding-right: 1rem;
    padding-left: 0.2rem;
  }

  .chakra-modal__body {
    scrollbar-width: thin !important;
    scrollbar-color: #ffb8bf23 !important;
  }

  .modal-title {
    font-size: 0.85rem;
  }

  .add-button {
    color: #fff;
    background-color: #ff4784 !important;
    border: none;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 2rem;
    padding: 0;

    &:hover {
      background-color: #c23262 !important;
    }

    &:active {
      background-color: #ff4784 !important;
    }
  }
`

interface ContainerProps {
  containerColor?: {
    primary: string
    secondary: string
  }
}

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

    .menu-item {
      font-weight: normal;
    }
  }
`

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

  .item-number {
    font-size: 0.7rem;
    position: absolute;
    left: 0.2rem;
    bottom: 0.2rem;
    padding: 0rem 0.35rem;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.2rem;
  }
`

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
`

export const Title = styled.span`
  font-weight: 600;
  font-size: 0.75rem;

  color: #00000090;
`

export const Description = styled.span`
  font-weight: 500;
  font-size: 0.75rem;
  color: #0000008c;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #00000092;
`

interface ImagePreviewProps {
  src: string
}

export const ImagePreview = styled.div<ImagePreviewProps>`
  width: 3rem;
  height: 2rem;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
`

export const DateInfo = styled.span`
  font-size: 0.6rem;
  color: #00000093;
`
