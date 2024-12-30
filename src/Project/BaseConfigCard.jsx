import React, { useState } from 'react';
import { Input, Switch, Row, Col, Card, Space, Button } from 'antd'; // 引入 Ant Design 的组件
import { UpOutlined, DownOutlined } from '@ant-design/icons'; // 引入图标

// 样式常量
const cardStyle = {
    borderRadius: '8px', // 圆角
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // 阴影
    background: '#ffffff', // 背景色
    transition: 'all 0.3s ease', // 添加过渡效果
};

const inputStyle = {
    width: '100%', // 宽度占满父容器
    borderRadius: '8px', // 圆角
    fontSize: '14px', // 字体大小
    transition: 'border-color 0.3s ease', // 添加过渡效果
};

// BaseConfigCard 组件
function BaseConfigCard() {
    const [isBaseConfigVisible, setIsBaseConfigVisible] = useState(true); // 是否显示基础配置
    const [isProxyEnabled, setIsProxyEnabled] = useState(false); // 是否开启代理

    // 处理检测按钮点击事件
    const handleCheckLink = () => {
        console.log('检测按钮被点击');
    };

    return (
        <Card
            title="基础配置"
            style={{
                ...cardStyle,
                height: isBaseConfigVisible ? 'auto' : '48px', // 隐藏时高度为 48px
                overflow: 'hidden', // 隐藏超出部分
                marginBottom: '16px', // 底部间距
            }}
            extra={
                <Space>
                    <Button
                        type="text"
                        icon={isBaseConfigVisible ? <UpOutlined /> : <DownOutlined />}
                        onClick={() => setIsBaseConfigVisible(!isBaseConfigVisible)}
                    />
                </Space>
            }
        >
            {isBaseConfigVisible && (
                <div>
                    {/* 第一行：目标网址和是否开启代理 */}
                    <Row gutter={16} align="middle">
                        <Col span={12}>
                            <Input
                                type="text"
                                placeholder="请输入目标网址"
                                style={inputStyle}
                                addonBefore="目标网址:"
                                onFocus={(e) => (e.target.style.borderColor = '#4096ff')}
                                onBlur={(e) => (e.target.style.borderColor = '#d9d9d9')}
                            />
                        </Col>
                        <Col span={12}>
                            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                                <Button type="primary" onClick={handleCheckLink} style={{ marginRight: '12px' }}>
                                    检测
                                </Button>
                                <span style={{ marginRight: '8px' }}>是否开启代理</span>
                                <Switch checked={isProxyEnabled} onChange={(checked) => setIsProxyEnabled(checked)} />
                            </div>
                        </Col>
                    </Row>
                    {isProxyEnabled && <p>代理功能暂未实现</p>}

                    {/* 第二行：部署服务器 */}
                    <Row gutter={16} align="middle">
                        <Col span={12}>
                            <div style={{ display: 'flex', alignItems: 'center', height: '100%', gap: '8px' }}>
                                <Input
                                    type="text"
                                    placeholder="IP"
                                    style={{ ...inputStyle, flex: 1 }}
                                    addonBefore="部署地址:  "
                                    onFocus={(e) => (e.target.style.borderColor = '#4096ff')}
                                    onBlur={(e) => (e.target.style.borderColor = '#d9d9d9')}
                                />
                            </div>
                        </Col>
                        <Col span={12}>
                            {/* 占位，确保布局对齐 */}
                        </Col>
                    </Row>
                </div>
            )}
        </Card>
    );
}

export default BaseConfigCard;
