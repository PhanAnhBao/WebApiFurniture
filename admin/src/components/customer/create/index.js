import './styles.scss';
import { useEffect, useState } from 'react';
import { create } from '../../../api/service/customers.service';
import { useNavigate } from 'react-router-dom';
function CreateCustomer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    let navigate = useNavigate();


    const handleSubmit = () => {
        const body = {
            customer_name: name,
            customer_email: email,
            customer_password: password,
            customer_phone: phone,
            customer_address: address,
        };

        create(body)
            .then(() => {
                navigate('/admin/customers');
            })
    }

    return (
        <div className="form__create">
            <h1>Tạo Khách hàng</h1>
            <div class="" >
                <div class="cards">
                    <div class="card-forms">
                        <div class="input">
                            <input type="text" id='customer_name' name='customer_name' class="input-field" value={name} onChange={(e) => setName(e.target.value)} required />
                            <label class="input-label">Tên khách hàng (*)</label>
                        </div>
                        <div class="input">
                            <input type="email" id='customer_email' name='customer_email' class="input-field" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <label class="input-label">Email (*)</label>
                        </div>
                        <div class="input">
                            <input type="password" id='customer_password' name='customer_password' class="input-field" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <label class="input-label">Password (*)</label>
                        </div>
                        <div class="input">
                            <input type="text" id='customer_phone' name='customer_phone' class="input-field" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                            <label class="input-label">Số điện thoại (*)</label>
                        </div>
                        <div class="input">
                            <input type="text" id='customer_address' name='customer_address' class="input-field" value={address} onChange={(e) => setAddress(e.target.value)} required />
                            <label class="input-label">Địa chỉ (*)</label>
                        </div>

                        <div class="action">
                            <button onClick={handleSubmit} class="action-button">Tạo</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default CreateCustomer;