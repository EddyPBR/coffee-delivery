import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 70rem; // 1120px
  width: 90vw;
  height: 6.5rem; // 104px
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem; // 12px
  }
`;
