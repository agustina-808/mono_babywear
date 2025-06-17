import "./section.css";
import { Link } from "react-router-dom";

export default function Section() {
    return (
        <div className="section">
            <Link className="link" to="/home">Главная</Link><br />
            <Link className="link" to="/news">Новости</Link><br />
            <Link className="link" to="/about">О бренде</Link><br />
            <Link className="link" to="/shop">Каталог</Link><br /><br /><br /><br /><br /><br /><br />
            <hr className="line" />
            <Link className="link" to="/contacts">Обратная связь</Link>
        </div>
    )
}