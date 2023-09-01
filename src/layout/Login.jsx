import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheet/login-style.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://portfolio-teven-dev.fl0.io/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            console.log("Respuesta del servidor:", response.status);
            console.log("Respuesta del servidor:", data);
            console.log(data.success)
            if (data.token) {
                localStorage.setItem('authToken', data.token);
                navigate('/dashboard'); 
            } else {
                alert(data.message || 'Login failed.');
            }

        } catch (error) {
            console.error("Error:", error);
            alert('An error occurred while logging in.');
        }
    }

    return (
        <section className='login-box'>
            <div className='box-title'>
                <h1>
                    <span className='sybols-text'>&#123; </span>
                    Teven
                    <span className='sybols-text'> &#125;</span>
                </h1>
                <span>Dashboard </span>
            </div>
            <form className='login-form' onSubmit={handleSubmit}>
                <input type="text" placeholder='User' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Ingresar</button>
            </form>
        </section>
    );
}
