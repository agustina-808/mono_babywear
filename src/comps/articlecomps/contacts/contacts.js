import "./contacts.css";

export default function Contacts() {
 return (
    <div className="contacts">
    <h1 className="h1">Связь с нами</h1>
    <p className="p">Нашите нам или найдите нас в соцсетях!<br /><br />
    MONO <br />
    +7 (938) 503-70-26<br />
    Магазин детской одежды г. Краснодар <br />
    ТК Центр Города, ул.Красная 176, павильон 1059 <br />
    10:00-22:00
    </p>
    <p className="p">Для заказа пишите:</p>
        <a href="https://t.me/monobabywear" className="a">Telegram</a>
        <a href="https://www.instagram.com/monobaby.ru?igsh=MzRlODBiNWFlZA==" className="a">Instagram</a>
    </div>
);
}