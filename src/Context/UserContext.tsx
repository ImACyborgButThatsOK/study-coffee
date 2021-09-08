import { createContext, ReactNode, useState } from "react"


interface UserContextValue {
    setToken: any;
    token: string;
}

interface UserContextProps {
    children: ReactNode
}

export const UserContextToken = createContext<UserContextValue>({} as UserContextValue)


export function UserProvider({ children }: UserContextProps) {

    const [token, setToken] = useState("");


    return (
        <UserContextToken.Provider value={{ setToken, token }}>
            {children}
        </UserContextToken.Provider>
    )
}