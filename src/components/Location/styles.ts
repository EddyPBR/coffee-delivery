import styled from "styled-components";

export const LocationTag = styled.button`
  color: ${(props) => props.theme["purple-dark"]};
  background-color: ${(props) => props.theme["purple-light"]};

  padding: 0.5rem;
  font-size: 0.875rem; // 14px
  border-radius: 0.375rem; // 6px

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  svg {
    font-size: 1.375rem;
    fill: ${(props) => props.theme["purple-dark"]};
  }
`;
