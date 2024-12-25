import React from 'react';
import './style/HeaderStyle.css'; // 根据需要添加样式
import logo from '../static/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{ backgroundColor: 'black', padding: '5px' }}>
            <div className="container">
                <div className="logo-container">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className='hlink-area'>
                    <div className='hlink-div'>
                        <Link to="/" className='hlink'>首页</Link>
                    </div>
                    <div className='hlink-div'>
                        <Link to="/" className='hlink'>G8</Link>
                    </div>
                    <div className='hlink-div'>
                        <Link to="/" className='hlink'>G8</Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;
