import { createContext,useState } from "react";

export const AccountContext = createContext();




const AccountProvider = (props) => {

    const [Account, setAccount] = useState("");




    return (
        <AccountContext.Provider value={{ Account, setAccount }}>
          {props.children}
        </AccountContext.Provider>
    
      )
    }
    

export default AccountProvider;