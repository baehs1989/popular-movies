import SpinLoader from "./spin"
import classes from './overflow.module.css'

const Overflow = () => {
    return <div className={classes.wrapper}>
        <SpinLoader/>
    </div>
}

export default Overflow