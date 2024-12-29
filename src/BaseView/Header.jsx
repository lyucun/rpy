import React from 'react';
import { Layout, Menu, Input } from 'antd'; // 引入 Ant Design 的 Layout、Menu 和 Input 组件
import { Link } from 'react-router-dom';
import logo from '../static/logo.svg';
import './style/HeaderStyle.css'; // 根据需要添加样式

const { Header } = Layout;

const PHeader = () => {
    return (
        <Header style={{ background: '#001529', padding: '0 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo部分 */}
                <div>
                    <img src={logo} alt="logo" style={{ height: '50px', width: '50px', transform: 'scaleX(-1)' }} />
                </div>

                {/* 导航链接部分 */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* 搜索框 */}
                    <Input
                        placeholder="搜索"
                        style={{
                            width: '200px',
                            marginRight: '24px',
                            borderRadius: '4px',
                        }}
                    />

                    {/* 导航菜单 */}
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px', background: 'transparent', borderBottom: 'none' }}
                    >
                        <Menu.Item key="1">
                            <Link to="/">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/control">控制</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/fortune-telling">算命</Link>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        </Header>
    );
};

export default PHeader;
