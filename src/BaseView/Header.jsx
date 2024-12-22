import React from 'react';
import './Header.css'; // 可以根据需要添加样式

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>我的网站</h1>
            </div>
            <nav className="navbar">
                <ul>
                    <li><a href="/">首页</a></li>
                    <li><a href="/about">关于我们</a></li>
                    <li><a href="/services">服务</a></li>
                    <li><a href="/contact">联系我们</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
