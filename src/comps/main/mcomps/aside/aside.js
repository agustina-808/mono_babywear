import "./aside.css";
import tg from "../../../../media/tg.png";
import ig from "../../../../media/ig.png";

export default function Aside() {
    return (
        <div className="aside">
            <h1 className="h1">MONO</h1>
            <p className="p">
                Магазин детской одежды, <br />
                г. Краснодар, ТК Центр Города<br /> 
                ул.Красная 176, павильон 1059 <br />
                номер телефона +7 (938) 503-70-26
            </p>
                <br />
            <p className="p">Для заказа пишите:</p>
            <a href="https://t.me/monobabywear"><img className="icon" src={tg} alt="tg" /></a>
            <a href="https://www.instagram.com/monobaby.ru?igsh=MzRlODBiNWFlZA=="><img className="icon" src={ig} alt="ig" /></a>
        </div>
    )
}