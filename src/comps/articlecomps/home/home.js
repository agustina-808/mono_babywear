import "./home.css";
import LogoPic from "../../../media/logo.png"

export default function Home() {
 return (
    <div className="home">
        <img className="img" src={LogoPic} alt="logo"/>
    <h1 className="h1">Добро пожаловать в MONO!</h1>
    <p className="p">Мы современный магазин одежды и обуви для детей в Краснодаре. В нашем пространстве собрана уникальная и базовая одежда. Здесь вы найдёте все от стиля спорт-шик и олд мани до базовых, повседневных вещей.</p>
    </div>
);
}