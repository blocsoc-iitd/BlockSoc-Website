
import '@styles/globals.css';
import Footer from "@components/Footer"
import Nav from "@components/Nav"



export const metadata = {
    title: "BlocSoc Website",
    description: "Don't trust, verify"
}

const RootLayout = ({ children }) => {
    
  return (
    <html lang = "en">
        <body className='app app-background'>
        <Nav />
            {children}
        <Footer />
        </body>
    </html>
  )
}

export default RootLayout;

