import Header from "./header"

const Layout:React.FC = ({children}) => {
    return (
        <>
            <Header/>
            <div style={{height: 90}}>

            </div>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout