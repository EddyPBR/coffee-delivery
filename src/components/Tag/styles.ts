import styled from "styled-components";

export const TagContent = styled.div`
  border-radius: 9999px;
  padding: 0.25rem 0.5rem; // 4px 8px
  background-color: ${(props) => props.theme["yellow-light"]};

  & > span {
    text-transform: uppercase;
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;
