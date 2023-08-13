import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import Po_search from './pages/Po_search'

export default function Po_Login() {
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const response = await axios.post("http://localhost:8080/login",
            {
                username: username,
                password: password
            });
            // Handle the response as needed
            // Logging the response data to the console
            if(response.data!=""){
                // <Po_search response={response.data}/>
                navigate("/Place_officer");
            }else{
                window.alert('User Not Found!!')
            }

        } catch (error) {
            // Handle any error that occurred during the request
            console.error(error);
        }
    };

    return (
        <div>
            <div style={{ textAlign: "center" ,marginTop:'5%'}}>
                <br />
                <h1 >Placement officer Login</h1>
            </div>
            <div style={{ background: 'dark',marginLeft:'auto',marginRight:'auto',marginTop:'5%',width:'30%'}}>
                <div className='p-5 bg-primary w-10' style={{ border: '3px solid red', borderTopLeftRadius: 25, borderTopRightRadius: 25, borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}>
                    <form onSubmit={onSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='username'>Username</label>
                            <input
                                type='name'
                                placeholder='Enter a username'
                                className='form-control'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                placeholder='Enter a password'
                                className='form-control'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type='submit' className='btn btn-success mx-3'>Login</button>
                        
                        <Link className='btn btn-danger' style={{marginLeft:'50%'}} to="/header">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

