import styled from "styled-components";

export const IntroSection = styled.section`
  width: 100%;
  padding: 5.75rem;
`;

export const Content = styled.div`
  h2 {
    margin-top: 1rem;
  }

  ul {
    margin-top: 4.125rem;
  }
`;

export const Image = styled.img`
  height: auto;
  width: 100%;
  max-height: 360px;
  max-width: 476px;
`;

export const InfoList = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem 2.5rem;

  list-style: none;
`;
