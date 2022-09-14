import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { manyBuyer, productList } from '../../data/home.data';
import './styles.scss';
import { getLimited} from '../../api/service/product.service';

function Home() {
    const [list, setList] = useState([]);
    useEffect(() => {
        getLimited()
            .then((res) => {
                setList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div className='Home'>
            <div className="products--new">
                <h2 className="products--new__h2">
                    Sản phẩm mới
                </h2>
            </div>

            <div className="products--new__row">
                {
                    list.map(function (item) {
                        return (
                            <div className='products--items'>
                                <div class="products--items__img">
                                    <img src={`${item.product_image}`} alt="rings" />
                                    <div className="overlay">
                                        <div className="text">
                                            <img src={`${item.product_image1}`} alt="rings" />
                                        </div>
                                    </div>
                                </div>
                                <div class="products--items__main">
                                    <a href={`/productdetails/${item.product_slug}`}>{item.product_name}</a>
                                    <p><span className='price__product'>Giá:</span> {item.product_price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                                    <button className="border__button">Thêm vào giỏ hàng</button>
                                </div>
                                <span className="new"></span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="many--order">
                <div className="buyers">
                    <h2 className="buyers__h2">
                        Mua nhiều
                    </h2>
                </div>
                <div className="products--orders--row">
                    <button className="slide--button slide--button__left">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="slide--button slide--button__right">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    {
                        manyBuyer.map(item => (
                            <div className="products--orders__item">
                                <div className="products--items__img">
                                    <img src={`./${item.imgUrl}`} alt="rings" />
                                    <div className="overlay">
                                        <div className="text">
                                            <img src={`./${item.imgUrl1}`} alt="rings" />
                                        </div>
                                    </div>
                                </div>
                                <div className="products--items__info">
                                    <Link to="/productdetails">{item.name}</Link>
                                    <p>${item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                                    <button>Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default Home;