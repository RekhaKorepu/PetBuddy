import React from "react";
import { createContext, ReactNode, useState } from "react";

const StateContext = createContext<any>({
    username: '',
    setUsername: ()=> {},
    email: '',
    setEmail: ()=> {},
    password: '',
    setPassword: ()=> {},
    mobile: '',
    setMobile: ()=> {},
    address: '',
    setAddress: ()=> {}

});
export const StateProvider =({children}: {children: ReactNode}) => {
    const [username, setUsername]= useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]= useState("");
    const [mobile, setMobile]= useState("");
    const [address, setAddress]= useState("");
    return (
        <StateContext.Provider
          value={{username, setUsername, email, setEmail, password, setPassword, mobile, setMobile, address, setAddress}}
        >
          {children}
        </StateContext.Provider>
      );
}
export const useGlobalState = () => {
   const context = React.useContext(StateContext);
    return context;
};