import './styles.scss';
import {Link, useLocation} from 'react-router-dom'
function AdminComponents() {

    
    return ( 
        <div className="Main__admin">
            <div className="row">
                <div className="col-3">
                    <Link to="/admin/products"><img src="/images/product.jpg" alt="img"/></Link>
                    <Link to="/admin/products">Sản phẩm</Link>
                    <Link to="/admin/products" className="manger">Quản lý</Link>
                </div>
                <div className="col-3">
                    <Link to="/admin/categories"><img src="/images/loai.jpg" alt="img"/></Link>
                    
                    <Link to="/admin/categories">Loại sản phẩm</Link>
                    <Link to="/admin/categories" className="manger">Quản lý</Link>
                </div>
                <div className="col-3">
                    <Link to="/admin/brands"><img src="/images/cartnv.jpg" alt="img"/></Link>
                    <Link to="/admin/brands">Đơn hàng</Link>
                    <Link to="/admin/brands" className="manger">Quản lý</Link>
                </div>
                <div className="col-3">
                    <Link to="/admin/brands"><img src="/images/thuong.jpg" alt="img"/></Link>
                    <Link to="/admin/brands">Thương hiệu</Link>
                    <Link to="/admin/brands" className="manger">Quản lý</Link>
                </div>
                <div className="col-3">
                    <Link to="/admin/customers"><img src="/images/cus.jpg" alt="img"/></Link>
                    
                    <Link to="/admin/customers">Khách hàng</Link>
                    <Link to="/admin/customers" className="manger">Quản lý</Link>
                </div>
                <div className="col-3">
                    <Link to="/admin/employees"><img src="/images/emnv.jpg" alt="img"/></Link>
                    <Link to="/admin/employees">Nhân viên</Link>
                    <Link to="/admin/employees" className="manger">Quản lý</Link>
                </div>
                
            </div>
        </div>
     );
}

export default AdminComponents;