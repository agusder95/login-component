import { createContext, useState } from "react";

const ShowElements = createContext({})

export const ShowElementsProvider = ({children}) => {
     const [show, setShow] = useState(false)
     
     return (
          <ShowElements.Provider value={{
               show,
               setShow,
          }}>
               {children}
          </ShowElements.Provider>
     )
}

export default ShowElements