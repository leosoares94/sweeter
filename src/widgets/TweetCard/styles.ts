import styled from 'styled-components'

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
  border-radius: 0.3rem;
  margin-top: 1rem;
  box-shadow: 0px 3px 10px rgba(221, 117, 117, 0.151);

  .retweet-flag {
    font-size: 0.9rem !important;
    margin-top: 0.8rem;
    color: #000000bd;
    z-index: 10;

    @media (max-width: 1368px) {
      font-size: 0.8rem !important;
    }
  }

  .retweet-flag-icon {
    margin-top: -0.3rem;
  }

  @media (max-width: 1368px) {
    margin-top: 0.6rem;
  }
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;

  .avatar {
    width: 2.5rem;
    height: 2.5rem;

    @media (max-width: 1368px) {
      width: 2.1rem;
      height: 2.1rem;
    }
  }
`

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

  .engagement {
    justify-content: space-between;
  }

  .tweet-icon {
    cursor: pointer;
    transition: ease 0.2s;
    &:hover {
      transform: scale(1.2);
    }

    @media (max-width: 1368px) {
      transform: scale(0.9);

      &:hover {
        transform: scale(1);
      }
    }
  }

  .add-button {
    margin-left: 1rem;
    border-radius: 2rem;
  }
`

export const Name = styled.span`
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.1rem;

  @media (max-width: 1368px) {
    font-size: 0.8rem;
  }
`

export const Username = styled.span`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.5);
  margin-top: -0.3rem;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media (max-width: 1368px) {
    font-size: 0.8rem;
  }
`

export const Tweet = styled.span`
  font-size: 0.96rem;
  padding-top: 1rem;
  white-space: pre-line;
  color: #000000be;

  a {
    color: #d45994;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 1368px) {
    font-size: 0.87rem;
  }
`

export const Time = styled.span`
  font-size: 0.92rem;
  padding-top: 1rem;
  color: rgba(0, 0, 0, 0.5);

  @media (max-width: 1368px) {
    font-size: 0.8rem;
  }
`

export const Source = styled.span`
  font-size: 0.92rem;
  padding-top: 1rem;
  color: #d53f8c;

  @media (max-width: 1368px) {
    font-size: 0.8rem;
  }
`

export const EngagementButton = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0.8rem;
  color: #000000ab;
`

export const EngagementNumber = styled.span`
  font-size: 0.7rem;
  padding-left: 0.3rem;
  padding-top: 0.05rem;
  box-sizing: border-box;
`

export const MediaContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  justify-content: space-between;

  video {
    border-radius: 5px;
  }

  .has-more-indicator {
    color: #fff;
    font-size: 0.9rem;
  }
`

interface ImageProps {
  src: string
  count: number
}

export const Image = styled.div<ImageProps>`
  width: ${({ count }) => (count > 1 ? '49.5%' : '100%')};
  height: ${({ count }) => (count > 1 ? '6rem' : '12rem')};
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  box-sizing: border-box;
  padding-right: 0.5rem;
  ${({ count }) =>
    count === 1
      ? 'border-radius: 5px;'
      : count > 1 && count < 3
      ? `
    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      height: 10rem;
    }
  
    &:last-child {
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
      height: 10rem;
    }`
      : count === 3
      ? `&:nth-child(3) {
        width: 100%;     
        margin-top: 0.18rem;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        background-position: bottom;
      }`
      : `  &:first-child {
      border-top-left-radius: 5px;
    }
  
    &:nth-child(2) {
      border-top-right-radius: 5px;
    }
  
    &:nth-child(3) {
      border-bottom-left-radius: 5px;
      margin-top: 0.18rem;
    }
  
    &:last-child {
      border-bottom-right-radius: 5px;
      margin-top: 0.18rem;
    }`}

  &:hover {
    cursor: pointer;
  }
`
