import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";

export default function App() {
    return (

        <div className="app-total" >
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}