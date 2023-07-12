import { useContext } from "react";
import { DivForm, FormContainer, FormWrapper, Input, Label, MainWrapper } from "./styles";
import ShowElements from "../../context/showElements";

function Main() {
     const {show, setShow} = useContext(ShowElements)
     return (
          <MainWrapper> 
               <h3>This is a main jeje</h3>
               <FormWrapper popup ={show}>
                    <p>Crear Cuenta</p>
                    <FormContainer>
                         <DivForm>
                              <Label htmlFor={"mail"}>Mail</Label>
                              <Input type={"email"} id="mail" name="mail" />
                         </DivForm>
                         <DivForm>
                              <Label htmlFor={"password"}>Password</Label>
                              <Input type={"password"} id="password" name="password" />
                         </DivForm>
                         <DivForm>
                              <Label htmlFor={"confirmPassword"}>Confirm Password</Label>
                              <Input type="password" id="confirmPassword" name="confirmPassword" />
                         </DivForm>
                         <DivForm>
                              <Label htmlFor={"accept"}>Accept t&c</Label>
                              <Input type={"checkbox"} id="accept" name="accept" />
                         </DivForm>
                    </FormContainer>
                    
               </FormWrapper>
          </MainWrapper>
     );
}

export default Main;