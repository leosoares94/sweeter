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
  theme?: ThemeAttributes
}

export const Row = styled.div<RowProps>`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin-top: 0.7rem;
  box-shadow: 0px 2px 2px rgba(137, 255, 224, 0.234);
  border-radius: 0.6rem;
  border: 1px solid #9d00ff27;
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
      theme.type === 'light' ? '#9c99afd3' : '#fff'};
    color: ${({ theme }) => (theme.type === 'light' ? '#322976d3' : '#fff')};
    font-size: 0.7rem !important;
    &:hover {
      background-color: #cfc9eee2;
    }
  }
`

export const Column = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
`
