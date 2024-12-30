import React, { useState } from 'react';
import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Pipeline from '../Project/PipleLine';
import Server from '../Home/Server';
const { Content, Sider } = Layout;

// 定义菜单项
const items2 = [
    {
        key: '1', // 唯一标识
        icon: <UserOutlined />, // 直接使用 JSX 图标
        label: '总览', // 菜单项名称
    },
    {
        key: '2',
        icon: <LaptopOutlined />, // 直接使用 JSX 图标
        label: '项目列表',
        children: [ // 使用 children 定义子菜单项
            {
                key: '2-1',
                label: '项目 1',
            },
            {
                key: '2-2',
                label: '项目 2',
            },
            {
                key: '2-3',
                label: '项目 3',
            },
        ],
    },
];

const MainBody = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [selectedKey, setSelectedKey] = useState('1'); // 默认选中第一个菜单项

    // 处理菜单项点击事件
    const handleMenuClick = ({ key }) => {
        console.log('click ', key);
        setSelectedKey(key); // 更新被点击的菜单项 key
    };

    // 根据 selectedKey 渲染对应的组件
    const renderContent = () => {
        if (selectedKey.startsWith('2-')) {
            return <Pipeline />; // 如果点击的是 2-1、2-2 或 2-3，渲染 Pipeline 组件
        }

        switch (selectedKey) {
            case '1':
                return <Server />; // 渲染服务器配置组件
            case '3':
                return <div>subnav 3 组件</div>; // 渲染 subnav 3 组件
            default:
                return <div>默认内容</div>; // 默认内容
        }
    };

    return (
        <Layout>
            <Content>
                <Layout
                    style={{ background: colorBgContainer, borderRadius: borderRadiusLG }}
                >
                    <Sider style={{ background: colorBgContainer }} width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            style={{ height: '100%' }}
                            items={items2} // 使用 items 属性
                            onClick={handleMenuClick} // 绑定点击事件
                        />
                    </Sider>
                    <Content style={{ padding: '0 24px', height: '90vh', background: "white" }}>
                        {renderContent()} {/* 动态渲染对应的组件 */}
                    </Content>
                </Layout>
            </Content>
        </Layout>
    );
};

export default MainBody;
