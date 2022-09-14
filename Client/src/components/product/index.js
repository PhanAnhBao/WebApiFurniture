import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAll } from '../../api/service/product.service';

function Product() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getAll()
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
                    Sản phẩm
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
            <div class="pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a class="active" href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">...</a>
                <a href="#">&raquo;</a>
            </div>
        </div>
    );
}

export default Product;