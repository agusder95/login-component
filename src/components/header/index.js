import { HeaderWrapper, Imagen, ImagenContainer, LoginContainer, NameUser } from "./styles";
import IconUser from "../../assets/images/PngItem_248235.png"
import { useContext } from "react";
import ShowElements from "../../context/showElements";
import InfoLogin from "../../context/infoLogin";

function Header() {
     const {show, setShow} = useContext(ShowElements)
     const {user, setUser} = useContext(InfoLogin)

     return (
          <HeaderWrapper>
               <h1>soy un header</h1>
               <LoginContainer onClick={()=>setShow(!show)}>
                    <ImagenContainer >
                         <Imagen src={IconUser} alt="inconUser" title="iconUser" />
                    </ImagenContainer>
                    
                    <NameUser>{user.name}</NameUser>
               </LoginContainer>

          </HeaderWrapper>
     );
}

export default Header;