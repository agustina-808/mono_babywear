import "./shop.css";
import pic_1 from "../../../media/pic_1.jpg";
import pic_2 from "../../../media/pic_2.jpg";
import pic_3 from "../../../media/pic_3.jpg";
import pic_4 from "../../../media/pic_4.jpg";
import pic_5 from "../../../media/pic_5.jpg";
import pic_6 from "../../../media/pic_6.JPG";
import pic_7 from "../../../media/pic_7.jpg";
import pic_8 from "../../../media/pic_8.png";

export default function Shop() {
 return (
    <div className="shop">
    <div className="cards">
        
        <div className="card">
            <div className="card_top">
                    <a href="#" className="card_image">
                    <img
                        src={pic_1}
                        alt="boy with white shorts and brown shirt"
                    />
                    </a>
                <div className="card_label">-10%</div>
            </div>
            <div className="card_prices">
                <div className="card_price card_price--discount">6.700</div>
                <div className="card_price card_price--common">7.500</div>
            </div>
                <p className="card_title">Льняной костюм</p>
        </div>

        <div className="card">
            <div className="card_top">
                    <a href="#" className="card_image">
                    <img
                        src={pic_2}
                        alt="спортивный костюмчик"
                    />
                    </a>
                <div className="card_label">-10%</div>
            </div>
            <div className="card_prices">
                <div className="card_price card_price--discount">4.200</div>
                <div className="card_price card_price--common">4.700</div>
            </div>
                <p className="card_title">Комплект в сеточку</p>
        </div>

        <div className="card">
            <div className="card_top">
                    <a href="#" className="card_image">
                    <img
                        src={pic_3}
                        alt="комлпект с худи"
                    />
                    </a>
                <div className="card_label">-10%</div>
            </div>
            <div className="card_prices">
                <div className="card_price card_price--discount">7.800</div>
                <div className="card_price card_price--common">8.700</div>
            </div>
                <p className="card_title">Комплект с худи</p>
        </div>

        <div className="card">
            <div className="card_top">
                    <a href="#" className="card_image">
                    <img
                        src={pic_4}
                        alt="спортик"
                    />
                    </a>
                <div className="card_label">-10%</div>
            </div>
            <div className="card_prices">
                <div className="card_price card_price--discount">8.500</div>
                <div className="card_price card_price--common">9.500</div>
            </div>
                <p className="card_title">Спортивный стиль</p>
        </div>

        <div className="card">
            <div className="card_top">
                    <a href="#" className="card_image">
                    <img
                        src={pic_5}
                        alt="пайеточки"
                    />
                    </a>
                <div className="card_label">-10%</div>
            </div>
            <div className="card_prices">
                <div className="card_price card_price--discount">10.500</div>
                <div className="card_price card_price--common">11.700</div>
            </div>
                <p className="card_title">Пайетка</p>
        </div>

        <div className="card">
            <div className="card_top">
                    <a href="#" className="card_image">
                    <img
                        src={pic_6}
                        alt="олд мани"
                    />
                    </a>
                <div className="card_label">-10%</div>
            </div>
            <div className="card_prices">
                <div className="card_price card_price--discount">8.300</div>
                <div className="card_price card_price--common">9.200</div>
            </div>
                <p className="card_title">Old money</p>
        </div>

        <div className="card">
            <div className="card_top">
                    <a href="#" className="card_image">
                    <img
                        src={pic_7}
                        alt="оливка"
                    />
                    </a>
                <div className="card_label">-10%</div>
            </div>
            <div className="card_prices">
                <div className="card_price card_price--discount">3.600</div>
                <div className="card_price card_price--common">4.000</div>
            </div>
                <p className="card_title">Оливковое настроение</p>
        </div>

        <div className="card">
            <div className="card_top">
                    <a href="#" className="card_image">
                    <img
                        src={pic_8}
                        alt="повседневка"
                    />
                    </a>
                <div className="card_label">-10%</div>
            </div>
            <div className="card_prices">
                <div className="card_price card_price--discount">6.600</div>
                <div className="card_price card_price--common">7.400</div>
            </div>
                <p className="card_title">Повседневный комплект</p>
        </div>
    </div>
    </div>
);
}