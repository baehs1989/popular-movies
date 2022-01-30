import classes from './error-page.module.css'

const ErrorPage = () => {
    return (
        <div className={classes.wrapper} data-test="error_page">
            <p>Something went wrong.</p>
            <p>Please try again later</p>
        </div>
    )
}

export default ErrorPage