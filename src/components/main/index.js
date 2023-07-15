import { useContext, useState } from "react";
import { DivForm, FormRegisterContainer, FormWrapper, Input, Label, OptionsContainer, OptionsSelect, MainWrapper, FormLoginContariner, ButtonSendForm, P } from "./styles";
import ShowElements from "../../context/showElements";
import InfoLogin from "../../context/infoLogin";

function Main() {
     const {show, setShow} = useContext(ShowElements)
     const {user, setUser} = useContext(InfoLogin)
     const [typeRegister, setTypeRegister] = useState("register")

     const login = () =>{
          var Newname = document.getElementById('userName').value;
          var password = document.getElementById('password').value;

          if (password && Newname){
               setUser({
                    name:Newname,
               })
          }else{
               alert("Please complete the login")
          }
     }

     const register = () =>{
          var Newname = document.getElementById('mail').value;
          var password = document.getElementById('setPassword').value;
          var confPassword = document.getElementById('confirmPassword').value;

          if (password != confPassword){
               alert("No coinciden las contraseñas")
          }else{
               if(Newname){
                    
                    alert("Fsdfds")

               }else{
                    alert("Please complete the Register") 
               }
          }


     }

     return (
          <MainWrapper> 
               <h3>This is a main jeje</h3>
               <FormWrapper popup ={show}>
                    <OptionsContainer>
                         <OptionsSelect onClick={()=>setTypeRegister("register")}>Register</OptionsSelect>
                         <p>or</p>
                         <OptionsSelect onClick={()=>setTypeRegister("login")}>Login</OptionsSelect>
                    </OptionsContainer>
                    <FormRegisterContainer show={typeRegister} id="FormRegisterContainer">
                         <DivForm>
                              <Label htmlFor={"mail"}>Mail</Label>
                              <Input type={"email"} id="mail" name="mail" />
                         </DivForm>
                         <DivForm>
                              <Label htmlFor={"setPassword"}>Password</Label>
                              <Input type={"password"} id="setPassword" name="setPassword" />
                         </DivForm>
                         <DivForm>
                              <Label htmlFor={"confirmPassword"}>Confirm Password</Label>
                              <Input type="password" id="confirmPassword" name="confirmPassword" />
                         </DivForm>
                         <DivForm>
                              <Label htmlFor={"accept"}>Accept t&c</Label>
                              <Input type={"checkbox"} id="accept" name="accept" />
                         </DivForm>
                         <ButtonSendForm type="button" form="FormRegisterContainer" value={"Submit"} onClick={()=>register()}>Register</ButtonSendForm>
                    </FormRegisterContainer>

                    <FormLoginContariner id="FormLoginContariner" show={typeRegister}>
                         <DivForm>
                              <Label htmlFor={"userName"}>User</Label>
                              <Input type={"userName"} id={"userName"} name="userName"/>
                         </DivForm>
                         <DivForm>
                              <Label htmlFor={"password"}>Password</Label>
                              <Input type={"password"} id="password" name="password" />
                         </DivForm>
                         <ButtonSendForm type="button" form="FormLoginContariner" value={"Submit"} onClick={()=>login()} >Login</ButtonSendForm>
                    </FormLoginContariner>
                    
               </FormWrapper>
          </MainWrapper>
     );
}

export default Main;