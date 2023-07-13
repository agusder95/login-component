import { createContext, useState } from "react"

const InfoLogin = createContext({})

export const InfoLoginProvider = ({children}) =>{
     const [user, setUser] = useState({
          name:'Login',

     })

     return (
          <InfoLogin.Provider value={{
               user,
               setUser,
          }}>
               {children}
          </InfoLogin.Provider>
     )
}

export default InfoLogin