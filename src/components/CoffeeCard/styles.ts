import styled from "styled-components";

export const Card = styled.div`
  height: 19.375rem; // 310px
  width: 16rem; //256px
  border-radius: 0.375rem 2.25rem; // 6px 36px
  background-color: ${(props) => props.theme["base-card"]};
  position: relative;
  padding: 1.25rem; // 2px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 7.5rem; // 120px
  height: 7.5rem; // 120px
  margin: -2.50rem auto 0.75rem auto; // 40px auto 12px auto
`;

export const TagsList = styled.header`
  display: flex;
  direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin: 0 auto;
  gap: 0.25rem; // 4px
`;

export const Content = styled.div`
  margin-top: 1rem; // 16px
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem; // 8px
  max-height: 5rem; // 72px
  overflow-y: auto;
  width: 100%;

  & > p {
    color:  ${(props) => props.theme["base-label"]};
    text-align: center;
  }
`;

export const Footer = styled.footer`
  position: absolute;

  width: 100%;
  bottom: 0;
  left: 0;
  padding: 1.25rem; // 2px;


  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span {
    display: flex;
    align-items: center;
    
    & > strong, & > span {
      color: ${(props) => props.theme["base-text"]};
    }
  }

  & > div {
    display: flex;
    gap: 0.5rem;
  }
`;