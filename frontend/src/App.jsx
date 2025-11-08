import { Outlet } from "react-router"
import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"


export default function App() {

  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}


