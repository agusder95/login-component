import styled from 'styled-components';

export const MainWrapper = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color:coral;
  display: flex;
  flex-direction:column;
  align-items:center;
  padding: 3rem 0;
`;

export const FormWrapper = styled.div`
  display: ${props => props.popup === true ? 'flex' : 'none'};
  position: absolute;
  top: 17%;
  background-color:white;
  width: 90%;
  height: 300px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items:center;
`;

export const FormContainer = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:center;
`;

export const DivForm = styled.div`
  margin: 10px 0;
`;

export const Input = styled.input`
  
`;

export const Label = styled.label`
  
`;

