import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {Footer} from "./components/footer/Footer"
import { Header } from "./components/header/Header";
import { Contact } from "./views/Contact/Contact";

import {Home} from "./views/Home/Home"



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
