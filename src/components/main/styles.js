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
  flex-direction: column;
  align-items:center;
  position: absolute;
  border-radius:10px;
  top: 17%;
  background-color:white;
  width: 50%;
  height: 400px;
  padding: 1rem;
`;

export const FormRegisterContainer = styled.form`
  display:${props => props.show === "register" ? 'flex' : 'none'};
  flex-direction:column;
  justify-content:center;
  margin-top:2rem;
`;

export const FormLoginContariner = styled.form`
  display:${props=> props.show === "login" ? 'flex' : 'none'};
  flex-direction:column;
  justify-content:center;
  margin-top:2rem;
`;

export const OptionsSelect = styled.p`
  cursor: pointer ;
  margin:0 1rem;
  
`;

export const OptionsContainer = styled.div`
  display:flex;
  align-items:center;
`;

export const DivForm = styled.div`
  margin:10px 10px;
  display:flex;
  flex-direction:column;
  &:nth-child(4){
    flex-direction:row;
  }
`;

export const Input = styled.input`
  
`;

export const Label = styled.label`
  margin-right:10px;
`;

export const ButtonSendForm = styled.button`
  width:5rem;
  height:3rem;
  margin-top:10px;
  align-self:center;
`;

export const P = styled.p`
  cursor: pointer;
`;

