import { HeaderWrapper, Imagen, ImagenContainer } from "./styles";
import IconUser from "../../assets/images/PngItem_248235.png"
import { useContext } from "react";
import ShowElements from "../../context/showElements";

function Header() {
     const {show, setShow} = useContext(ShowElements)
     
     return (
          <HeaderWrapper>
               <h1>soy un header</h1>
               <ImagenContainer onClick={()=>setShow(!show)}>
                    <Imagen src={IconUser} alt="inconUser" title="iconUser" />
               </ImagenContainer>

          </HeaderWrapper>
     );
}

export default Header;