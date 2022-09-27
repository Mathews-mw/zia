import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  h1 {
    margin-bottom: 2rem;
    color: ${props => props.theme["orage-700"]}
  }

  button {
    height: 48px;
    width: 120px;
    border: 0;
    background: ${props => props.theme["green-900"]};
    color: ${props => props.theme.white};
    font-weight: bold;
    padding: 0 1rem;
    border-radius: 6px;
    margin: 1.5rem 0;

    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${props => props.theme["green-700"]};
      transition: background-color 0.2s;
    }
  }
`;