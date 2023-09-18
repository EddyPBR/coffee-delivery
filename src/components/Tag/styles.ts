import styled from "styled-components";

export const TagContent = styled.div`
  border-radius: 9999px;
  padding: 0.25rem 0.5rem; // 4px 8px
  background-color: ${(props) => props.theme["yellow-light"]};
  line-height: 0;

  & > span {
    text-transform: uppercase;
    color: ${(props) => props.theme["yellow-dark"]};
    font-size: 0.625rem;
    line-height: 1.3;
    font-weight: 700;
  }
`;
