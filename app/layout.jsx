
import '@styles/globals.css';
import Footer from "@components/Footer"
import Nav from "@components/Nav"

export const metadata = {
  title: "BlocSoc IITD",
  description: "Blockchain Society, Indian Institute of Technology Delhi"
}

const RootLayout = ({ children }) => {
    
  return (
    <html lang = "en">
        <body className='app app-background'>
        <Nav className='z-50'/>
            {children}
        <Footer />
        </body>
    </html>
  )
}

export default RootLayout;

