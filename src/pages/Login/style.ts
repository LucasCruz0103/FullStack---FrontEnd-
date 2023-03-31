import styled from "styled-components";

interface IStyledProps {
  colorText?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 100%;
  width: 100%;
  height: 100vh;
  background-color:#DCDCDC;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #A9A9A9;
  width: 40%;
  height: 60%;
  border-radius: 2px;
  gap: 1rem;
  max-width: 100%;

  @media (max-width: 768px) {
    height: 50%;
  }

  h2 {
    font-size: 1.4rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    max-width: 100%;
    width: 80%;
    height: 50%;
  }

  input {
    border: 2px solid #f1e8e8;
    border-radius: 4px;
    width: 100%;
    height: 15%;
  }

  button {
    background-color: gray;
    color: black;
    border-radius: 12px;
    border: 2px solid transparent;
    height: 2.4rem;

    :hover {
      background-color: black;
      color: white;
    }
  }
`;

export const Label = styled.label<IStyledProps>`
  color: ${(props) => props.colorText};
  font-size: 0.85rem;
`;

export const Span = styled.span`
  color: black;
  font-size: 1rem;
`;
