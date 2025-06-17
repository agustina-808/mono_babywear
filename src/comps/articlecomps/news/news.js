import "./news.css";
import sale from "../../../media/sale.png";
import gift from "../../../media/gift.png";

export default function News() {
 return (
    <div className="news">
    
    <h1 className="h1">Специальные предложения</h1>
    <p className="p">Следите за обновлением сайта, чтобы не упустить скидки, предложения и акции.</p>
    
    <div className="post">
        <div className="text_block">
            <p className="p">Подарим 500р каждому, кто выполнит следующие условия: оставит отзыв о нашем магазине MONO на Яндекс Картах; при оформлении заказа онлайн или при покупке в офлайн
            магазине покажет скриншот оставленного
            отзыва.</p>
        </div>
        <div className="img_block">
            <img src={gift} alt="gift" className="post_image" />
        </div>
    </div>

    <div className="post">
        <div className="img_block">
            <img src={sale} alt="sale" className="post_image" />
        </div>
        <div className="text_block">
            <p className="p">Горячая распродажа! СКИДКИ ДО 50% в MONO. Не упустите возможность приобрести стильные вещи по суперценам.</p>
        </div>
    </div>
    
    </div>
);
}