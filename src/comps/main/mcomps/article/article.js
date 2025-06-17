import "./article.css";
import Home from "../../../articlecomps/home/home";
import News from "../../../articlecomps/news/news";
import About from "../../../articlecomps/about/about";
import Contacts from "../../../articlecomps/contacts/contacts";
import Shop from "../../../articlecomps/shop/shop";
import Er404 from "../../../articlecomps/er404/er404";
import { Routes, Route } from "react-router-dom";

export default function Article() {
    return (
        <div className="article">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/news" element={<News />} /> 
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} /> 
                <Route path="/shop" element={<Shop />} /> 
                <Route path="*" element={<Er404 />} />  
            </Routes>            
        </div>
    )
}