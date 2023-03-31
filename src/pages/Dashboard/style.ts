import styled from "styled-components";
import { Link } from "react-router-dom";

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
  background-color: gray;

  .btnEnd {
    background-color: grey;
    color: black;
    border-radius: 2px;
    border: 2px solid transparent;
    margin-left: 5rem;
    height: 5%;
    @media (max-width: 768px) {
      margin-left: 0;
      margin-bottom: 0.2rem;
    }

    :hover {
      background-color: black;
      color: white;
    }
    h1{
      color:blue
    }
  }
`;

export const TitlePage = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: bolder;
  margin-bottom: 2rem;
  max-width: 100%;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #D3D3D3;
  width: 40%;
  height: 60%;
  border-radius: 2px;
  gap: 1rem;
  max-width: 100%;
  margin-top: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 50%;
  }

  h2 {
    font-weight: bold;
    margin-top: 2rem;
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
    height: 33%;
  }

  button {
    background-color: grey;
    color: black;
    border-radius: 2px;
    border: 2px solid transparent;
    margin-bottom: 0.5rem;
    height: 15%;

    @media (max-width: 768px) {
      width: 80%;
    }

    :hover {
      background-color: black;
      color: white;
    }
  }
`;

export const Label = styled.label<IStyledProps>`
  color: ${(props) => props.colorText};
  font-size: 0.86rem;
`;

export const Span = styled.span`
  color: grey;
  font-size: 1rem;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 100%;
  width: 100%;
  min-height: 100%;
  background-color: #DCDCDC;

  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }
`;

export const ContactsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 45%;
  background-color: #D3D3D3;
  border-radius: 2px;
  padding: 1rem;
  margin-top: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 56%;

  @media (max-width: 768px) {
    width: 60%;
    max-height: 30%;
  }

  h2 {
    font-weight: bolder;
  }
`;

export const ContactsList = styled.ul`
  justify-content: center;
  list-style-type: none;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
  gap: 1rem;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const LinkStyle = styled(Link)`
  background-color: gray;
  color: white;
  border-radius: 2px;
  border: 2px solid transparent;
  text-decoration: none;
  margin-top: 4rem;
  position: relative;
  left: 45%;
  @media (max-width: 768px) {
    margin-top: 3rem;
  }

  :hover {
    text-decoration: underline 
  }
`;
export const Texto = styled.p`
 color:blue;
 margin-left: 4rem;

`
export const Titulo = styled.h1`
color:blue;
`

