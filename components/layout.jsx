import { Footer, Navbar } from './'

export const Layout = ({children}) => {
    return ( 
        <div className="content">
            <Navbar/>
                {children}
            <Footer/>
        </div>
     );
}
 
