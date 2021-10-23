import styled from "styled-components";

export const StyledLogout = styled.button`
  all: unset;
  background-color: #f73232;
  color: white;
  border-radius: 7px;
  padding: 0.1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: red;
  }
`;
