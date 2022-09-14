import './styles.scss';
import { useEffect, useState } from 'react';
import { getAll, deleteCustomer, findByName } from '../../../api/service/customers.service';
import { Link, useNavigate } from 'react-router-dom';


function TableCustomerList() {
    const [search, setSearch] = useState('');
    const [list, setList] = useState([]);
    let navigate = useNavigate();
    const handleDelete = (id) => {
        deleteCustomer(id)
        .then(res => {
            setList(res);
        })   
        .catch((e) => {
            console.log(e);
        })
    }

    useEffect(() => {
        findByName(search)
            .then(res => {
                setList(res.data);
            })
            .catch(e => {
                console.log(e);
            })
    }, [list]);

    useEffect(() => {
        getAll()
        .then((cus) => {
            setList(cus.data);
         })
         .catch((err) => {
             console.log(err);
         })
    }, []);

    return (
        <div className='table__product container'>
             <div className='h1__title'>
                <h1>Khách hàng</h1>
            </div>
            <div className='button_create'>
                <Link to='/admin/customers/create'>Tạo mới</Link>
                <div className='search__btn'>
                    <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Tìm kiếm theo tên....' />
                </div>
            </div>
            <div className="table_scroll">
                <div className="css_table">
                    <div className="css_thead">
                        <div className="css_tr">  
                            <div className='css_th'>Tên khách hàng</div>
                            <div className='css_th'>Email</div>
                            <div className="css_th">Password</div>
                            <div className="css_th">Số điện thoại</div>
                            <div className="css_th">Địa chỉ</div>
                            <div className="css_th"></div>
                            <div className="css_th"></div>
                        </div>
                    </div>
                    <div className="css_tbody">
                        {   
                            list.length === 0 ? (
                                <h3>Không có khách hàng nào. <Link to='/admin/customers/create'>Thêm tại đây!</Link></h3>
                            ) :
                            list.map(item => (
                                <div key={item._id} className='css_tr'> 
                                    <div className='css_td' data-label="Name">{item.customer_name}</div>
                                    <div className='css_td' data-label="Email">{item.customer_email}</div>
                                    <div className='css_td' data-label="Password">{item.customer_password}</div>
                                    <div className='css_td' data-label="Phone">{item.customer_phone}</div>
                                    <div className='css_td' data-label="Address">{item.customer_address}</div>
                                    <div className='css_td'><Link to={`/admin/customers/${item._id}/edit`}>Edit</Link></div>
                                    <div className='css_td'><a onClick={() => handleDelete(item._id)}>Delete</a></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TableCustomerList;