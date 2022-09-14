import './styles.scss';
import { useEffect, useState } from 'react';
import { getAll, deleteEmployee, findByName } from '../../../api/service/employees.service';
import { Link, useNavigate } from 'react-router-dom';


function TableEmployeeList() {
    const [search, setSearch] = useState('');
    const [list, setList] = useState([]);
    let navigate = useNavigate();
    const handleDelete = (id) => {
        deleteEmployee(id)
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
                <h1>Nhân Viên</h1>
            </div>
            <div className='button_create'>
                <Link to='/admin/employees/create'>Tạo mới</Link>
                <div className='search__btn'>
                    <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Tìm kiếm theo tên....' />
                </div>
            </div>
            <div className="table_scroll">
                <div className="css_table">
                    <div className="css_thead">
                        <div className="css_tr">  
                            <div className='css_th'>Tên nhân viên</div>
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
                                <h3>Không có nhân viên nào. <Link to='/admin/employees/create'>Thêm tại đây!</Link></h3>
                            ) :
                            list.map(item => (
                                <div key={item._id} className='css_tr'> 
                                    <div className='css_td' data-label="Name">{item.admin_name}</div>
                                    <div className='css_td' data-label="Email">{item.admin_email}</div>
                                    <div className='css_td' data-label="Password">{item.admin_password}</div>
                                    <div className='css_td' data-label="Phone">{item.admin_phone}</div>
                                    <div className='css_td' data-label="Address">{item.admin_address}</div>
                                    <div className='css_td'><Link to={`/admin/employees/${item._id}/edit`}>Edit</Link></div>
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

export default TableEmployeeList;