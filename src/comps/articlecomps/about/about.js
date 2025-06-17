import "./about.css";
import about_pic_1 from "../../../media/about_pic_1.png";
import about_pic_2 from "../../../media/about_pic_2.png";
import about_pic_3 from "../../../media/about_pic_3.png";

export default function About() {
 return (
    <div className="about">
    <h1 className="h1">Мы — MONO!</h1><br /><br />
    <p className="p">Дорогие покупатели, рада приветствовать Вас в нашем магазине стильной детской одежды «MONO».
        Меня зовут Александра, я основатель и идейный вдохновитель этого магазина, и именно я отвечаю на все Ваши сообщения</p>
    
    <div className="about_img">
    <img className="about_pic" src={about_pic_1} alt="фотка наш секрет 1" />
    <img className="about_pic" src={about_pic_2} alt="фотка наш секрет 2" />
    <img className="about_pic" src={about_pic_3} alt="фотка наш секрет 3" />
    </div><br />

    <h1 className="h1">О нас</h1>
    <div className="about_text">
    <ol className="ol">
        <li className="li">Мы молодой, но успешно развивающийся магазин, в нашем ассортименте вы найдете детскую одежду и обувь в стиле минимализм, комфортную по-детски и стильную по-взрослому.</li>
        <li className="li">Наши клиенты отмечают высокое качество товара и комфортный современный дизайн.</li>
        <li className="li">Доброжелательное отношение и грамотную, подробную консультацию по товару. Мы ценим каждого и ориентированы на долгосрочное сотрудничество с покупателем.</li>
        <li className="li">Наша компания старается решить любой вопрос в пользу клиента и оставить о себе приятное впечатление.</li>
        <li className="li">Мы подбираем оптимальные и выгодные условия доставки для покупателя в кратчайшие сроки.</li>
    </ol></div>
    <h1 className="h1">Доставка</h1>
    <div className="about_text">
    <ol className="ol">
        <li className="li">Авито доставкой в любой город в том числе по Краснодару:</li>
    <ul>
        <li className="li">Минимальная стоимость транспортировки.</li>
        <li className="li">При получении есть 15 минут на решение о приобретении.</li>
        <li className="li">Гарантия честной сделки.</li>
        <li className="li">Оперативная отправка заказов.</li>
    </ul>
            <p className="p">Все виды кроме Avito exmail.</p>
        <li className="li">Express доставка Яндекс курьером в течении дня:</li>
    <ul>
        <li className="li">По тарифам Яндекс, стоимость будет зависеть от адреса и рассчитывается индивидуально.</li>
        <li className="li">Оплата производится в виде 100% на карту за заказ и отправку.</li>
        <li className="li">Возможен обмен и возврат, мы честно ведем дела, с уважением относимся к клиентам и очень дорожим своей репутацией.</li>
    </ul>
        <li className="li">Возможны отправки Сдэк, Почтой России, Boxberry, DPD.</li>
    <p className="p">(в случае если условия для вас более выгодные, чем предложила служба Авито доставки.)</p>
    </ol>
    </div>
    </div>
);
}