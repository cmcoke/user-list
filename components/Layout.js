import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {/* refers to the different pages -- home, about, users */}
      {children}
      <Footer />
    </div>
  )
}
export default Layout