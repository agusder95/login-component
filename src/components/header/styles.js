import styled from 'styled-components';

export const HeaderWrapper = styled.header`
     width: 100%;
     height:100px;
     border-bottom:1px solid black;
     display: flex;
     justify-content:space-around;
     align-items:center;
`;

export const LoginContainer = styled.div`
     display:flex;
     flex-direction:column;
     align-items:center;
     justify-content:center;
     cursor:pointer;
     width:auto;
     height:100%;
`;

export const ImagenContainer = styled.div`
     width:auto;
     height:50%;
`;

export const Imagen = styled.img`
     width: 100%;
     height: 100%;
`;

export const NameUser = styled.p`
     margin:0;
     padding: 0;
`;