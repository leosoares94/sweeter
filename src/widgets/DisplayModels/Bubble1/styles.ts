import styled from "styled-components";
import { motion } from "framer-motion"
type BubbleContainerProps = {
  height?: string,
  opacity: number,
  containerOpacity: number;
}

export const Container = styled(motion.div)<BubbleContainerProps>`
  width: 45rem;
  max-height: max-content;
  background-color: #fff;
  border-radius: 1.2rem;
  transform: scale(1.2);
  overflow: hidden;
  box-shadow: 0px 3px 10px rgba(221, 117, 117, 0.151);
  opacity: ${({containerOpacity}) => containerOpacity};

  transition: opacity .3s;
  .username {
    padding-left: 0.85rem;
  }

  .bubble-header {
    background-color: #fff;
    position: absolute;
    top: 0;
    padding-top: 2rem;;
    padding-right: 4.2rem;
    z-index: 10000;
  }

  .bubble-tweet {
    opacity: ${({opacity}) => opacity};
    padding-top: 4.5rem;
    z-index: 5000 ;
    transition: opacity ease 2s;
  }

  .engagement-container {
    justify-content:  space-between;
    background-color: #fff ;
    box-sizing: border-box ;
    padding-right: 70%;
    position: absolute;
    bottom: 0;
    padding-bottom: 2rem;;
    z-index: 10000;
  
    span {
      font-size: .8rem;
    }
  }

  .first-column {
    padding: 2rem;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

export const Username = styled.span`
  font-size: 0.9rem;
  color: #000000aa;
`;

export const Name = styled.span`
  font-weight: 600;
`;

export const Text = styled.span`
  font-size: 1.4rem;

  a {
    color: #d45994;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Time = styled.span`
  font-size: 0.9rem;
  color: #000000aa;
  padding: 0.5rem 0rem;
  padding-bottom: 3rem;
`;

export const Engagement = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0.8rem;
  color: #000000ab;
`;

export const Source = styled.span`
  font-size: 0.92rem;
  padding-top: 1rem;
  color: #d53f8c;

  
`;