import styled from "styled-components";

export const RegisterContainer = styled.div`
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

  form {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  input {
   padding: 0.4rem;
   margin-bottom: 1rem;
   border-radius: 6px;
   border: 0.5px solid black;
  }

  input:focus {
    border: 0;
  }
  
  input[type='number'] {
    -moz-appearance:textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  button[type="submit"] {
    height: 48px;
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

  a {
    text-decoration: none;
    color: ${props => props.theme["blue-500"]}
  }

  a:hover {
    color: ${props => props.theme["blue-600"]};
    transition: color 0.2s;
  }
`;

export const ToBack = styled.div`
  width: 100%;
  display: flex;  
  justify-content: end;
  align-items: flex-start;
`;