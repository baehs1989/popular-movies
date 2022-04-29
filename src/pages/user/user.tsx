import { useRef, useContext } from "react"

import { UserCtx } from "../../context/UserContext"
import classes from './user.module.css'

const User = () => {
    const userCtx = useContext(UserCtx)
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>
    const onClickSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = inputRef.current.value
        userCtx?.setUsername(username)
    }

    return (
        <div className={classes.user}>
            <form onSubmit={onClickSubmit}>
                <label htmlFor="username">Please enter your username</label>
                <input ref={inputRef} id="username" type='text'/>
                <button>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default User