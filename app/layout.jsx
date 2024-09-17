
import '@styles/globals.css';
import Footer from "@components/Footer"
import Nav from "@components/Nav"

export const metadata = {
  title: "BlocSoc IIT Delhi",
  description: "Blockchain Society, Indian Institute of Technology Delhi, is the student driven community of enthusisatic builders and resarchers in the field of blockchain, zero knowledge and distributed systems.",
}

const RootLayout = ({ children }) => {
    
  return (
    <html lang = "en">
        <head>
          <link rel="icon" href="/assets/og_logo.png" />
        </head>
        <body className='app app-background'>
        <Nav className='z-50'/>
            {children}
        <Footer />
        </body>
    </html>
  )
}

export default RootLayout;

