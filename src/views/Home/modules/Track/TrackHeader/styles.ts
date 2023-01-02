import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0rem 1.5rem;
  padding-top: 1rem;
  box-sizing: border-box;
  background-color: #f3aeae10;

  @media (max-width: 1368px) {
    padding-left: 1.2rem;
    padding-right: 1.4rem;
  }
`

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

  .menu-item {
    padding: 0.3rem 0.8rem;
    border: none;
    border-radius: 0;
    background-color: #fff;

    z-index: 80000;
    &:hover {
      background-color: #ed64a618;
    }
  }

  @media (max-width: 1368px) {
    height: 1.5rem !important;
    .badge {
      height: 0.2rem !important;
      font-size: 0.7rem;
    }
  }
`

export const Title = styled.span``
