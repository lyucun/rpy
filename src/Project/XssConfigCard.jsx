import React, { useState } from 'react';
import { Button, Card, Space } from 'antd'; // 引入 Ant Design 的组件
import { UpOutlined, DownOutlined } from '@ant-design/icons'; // 引入图标

// 样式常量
const cardStyle = {
    borderRadius: '8px', // 圆角
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // 阴影
    background: '#ffffff', // 背景色
    transition: 'all 0.3s ease', // 添加过渡效果
};


function XssConfigCard() {
    const [isSqlConfigVisible, setIsSqlConfigVisible] = useState(true); // 是否显示 SQL 配置
    return (
        <Card
            title="Xss 配置"
            style={{
                ...cardStyle,
                height: isSqlConfigVisible ? 'auto' : '48px', // 隐藏时高度为 48px
                overflow: 'hidden', // 隐藏超出部分
                marginBottom: '16px', // 底部间距
            }}
            extra={
                <Space>
                    <Button
                        type="text"
                        icon={isSqlConfigVisible ? <UpOutlined /> : <DownOutlined />}
                        onClick={() => setIsSqlConfigVisible(!isSqlConfigVisible)}
                    />
                </Space>
            }
        >
            {isSqlConfigVisible && (
                <div>
                    <p>confi</p>
                    {/* 在这里添加 SQL 配置的具体内容 */}
                </div>
            )}
        </Card>
    );
}

export default XssConfigCard;
