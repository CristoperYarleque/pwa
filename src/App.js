import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Header from "./components/Header"

export default function App() {
  return (
    <div>
      <Header />
      <Cards />
      <Footer />
    </div>
  )
}

