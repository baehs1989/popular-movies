import React, {createContext, useState } from 'react';

interface UserContextInterface {
    username:string,
    setUsername:(input:string)=>void
}

export const UserCtx = createContext<UserContextInterface| null>(null)

export const UserContextProvider:React.FC = ({children}) => {
    const [username, setUsername] = useState('')

    return (
        <UserCtx.Provider value={{
            username:username,
            setUsername:(input)=>setUsername(input)
        }}>
            {children}
        </UserCtx.Provider>
    )
}