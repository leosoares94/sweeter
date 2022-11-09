import styled from "styled-components";

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
  box-shadow: 0px 3px 10px rgba(255, 137, 137, 0.205);
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`;

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
  }

  .add-button {
    margin-left: 1rem;
  }
`;

export const Name = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 0.3rem;
`;

export const Username = styled.span`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.5);
  margin-top: -0.3rem;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Tweet = styled.span`
  font-size: 1rem;
  padding-top: 1rem;
`;

export const Time = styled.span`
  font-size: 0.8rem;
  padding-top: 1rem;
  color: rgba(0, 0, 0, 0.5);
`;

export const Source = styled.span`
  font-size: 0.8rem;
  padding-top: 1rem;
  color: #ff4784;
`;

export const EngagementButton = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0.2rem;
  color: #000000ab;
`;

export const EngagementNumber = styled.span`
  font-size: 0.7rem;
  padding-left: 0.3rem;
  padding-top: 0.05rem;
  box-sizing: border-box;
`;
