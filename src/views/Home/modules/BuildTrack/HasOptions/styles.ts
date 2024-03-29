import { ThemeAttributes } from '@/utils/appTheme'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: max-content;
  background-color: #fff;
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  z-index: 10000;
`
interface RowProps {
  theme?: ThemeAttributes | null
}

export const Row = styled.div<RowProps>`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin-top: 0.7rem;
  box-shadow: 2px 2px 2px rgba(137, 218, 255, 0.44);
  border-radius: 0.6rem;
  border: 1px solid #00ffdd27;

  .tags {
    font-size: 0.7rem;
    background-color: #daf9ee;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important ;
    padding: 0rem;
  }

  .tag-input {
    font-size: 0.8rem;
  }

  .option-button {
    border-color: ${({ theme }) =>
      theme.type === 'light' ? '#6b9dc6' : '#fff'};
    color: ${({ theme }) => (theme.type === 'light' ? '#347b89' : '#fff')};
    &:hover {
      background-color: #ade8e8d3;
    }
  }

  /* @media (min-width: 1919px) {
    border: 0.1rem dashed #8bc3af;
  } */
`

export const Column = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
`
