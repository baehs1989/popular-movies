import { useContext } from "react"
import User from "../pages/user/user"

import Header from "./header"
import { UserCtx, } from "../context/UserContext"

const Layout:React.FC = ({children}) => {
    const userCtx = useContext(UserCtx)
    return (
        <>
            <Header/>
            <div style={{height: 90}}>

            </div>
            <main>
                {
                    userCtx && !userCtx.username ?
                    <User/>
                    :
                    children
                }
            </main>
        </>
    )
}

export default Layout