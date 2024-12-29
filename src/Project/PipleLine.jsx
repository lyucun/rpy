import React, { useState } from 'react';
import SqlAttack from './SqlAttack';
import XssAttack from './XssAttack';
import BaseConfig from './BaseConfig';
import { Card, Space, Button } from 'antd'; // 引入 Ant Design 的 Card、Space 和 Button 组件
import { UpOutlined, DownOutlined, EditOutlined, EyeOutlined, SaveOutlined } from '@ant-design/icons'; // 引入图标

const cardStyle = {
    borderRadius: '8px', // 圆角
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // 阴影
    background: '#ffffff', // 背景色
    transition: 'all 0.3s ease', // 添加过渡效果
};

const containerStyle = {
    padding: '24px', // 内边距
    background: '#f0f2f5', // 背景色
};

function Pipeline() {
    // 状态管理每个 Card 的展开/隐藏状态
    const [isBaseConfigVisible, setIsBaseConfigVisible] = useState(true);
    const [isSqlAttackVisible, setIsSqlAttackVisible] = useState(true);
    const [isXssAttackVisible, setIsXssAttackVisible] = useState(true);

    // 处理修改按钮点击事件
    const handleEdit = (title) => {
        console.log(`修改 ${title}`);
        // 在这里添加修改逻辑
    };

    // 处理查看按钮点击事件
    const handleView = (title) => {
        console.log(`查看 ${title}`);
        // 在这里添加查看逻辑
    };

    return (
        <div style={containerStyle}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                {/* 基础配置模块 */}
                <Card
                    title="基础配置"
                    style={{
                        ...cardStyle,
                        height: isBaseConfigVisible ? 'auto' : '48px', // 隐藏时高度为 48px
                        overflow: 'hidden', // 隐藏超出部分
                    }}
                    extra={
                        <Space>
                            <Button
                                type="text"
                                icon={<EditOutlined />}
                                onClick={() => handleEdit('基础配置')}
                            />
                            <Button
                                type="text"
                                icon={<EyeOutlined />}
                                onClick={() => handleView('基础配置')}
                            />
                            <Button
                                type="text"
                                icon={<SaveOutlined />}
                                onClick={() => handleView('基础配置')}
                            />
                            <Button
                                type="text"
                                icon={isBaseConfigVisible ? <UpOutlined /> : <DownOutlined />}
                                onClick={() => setIsBaseConfigVisible(!isBaseConfigVisible)}
                            />
                        </Space>
                    }
                >
                    {isBaseConfigVisible && <BaseConfig />}
                </Card>

                {/* SQL 攻击模块 */}
                <Card
                    title="SQL配置"
                    style={{
                        ...cardStyle,
                        height: isSqlAttackVisible ? 'auto' : '48px', // 隐藏时高度为 48px
                        overflow: 'hidden', // 隐藏超出部分
                    }}
                    extra={
                        <Space>
                            <Button
                                type="text"
                                icon={<EditOutlined />}
                                onClick={() => handleEdit('SQL配置')}
                            />
                            <Button
                                type="text"
                                icon={<EyeOutlined />}
                                onClick={() => handleView('SQL配置')}
                            />
                               <Button
                                type="text"
                                icon={<SaveOutlined />}
                                onClick={() => handleView('SQL配置')}
                            />
                            <Button
                                type="text"
                                icon={isSqlAttackVisible ? <UpOutlined /> : <DownOutlined />}
                                onClick={() => setIsSqlAttackVisible(!isSqlAttackVisible)}
                            />
                        </Space>
                    }
                >
                    {isSqlAttackVisible && <SqlAttack />}
                </Card>

                {/* XSS 攻击模块 */}
                <Card
                    title="XSS配置"
                    style={{
                        ...cardStyle,
                        height: isXssAttackVisible ? 'auto' : '48px', // 隐藏时高度为 48px
                        overflow: 'hidden', // 隐藏超出部分
                    }}
                    extra={
                        <Space>
                            <Button
                                type="text"
                                icon={<EditOutlined />}
                                onClick={() => handleEdit('XSS配置')}
                            />
                            <Button
                                type="text"
                                icon={<EyeOutlined />}
                                onClick={() => handleView('XSS配置')}
                            />
                               <Button
                                type="text"
                                icon={<SaveOutlined />}
                                onClick={() => handleView('XSS配置')}
                            />
                            <Button
                                type="text"
                                icon={isXssAttackVisible ? <UpOutlined /> : <DownOutlined />}
                                onClick={() => setIsXssAttackVisible(!isXssAttackVisible)}
                            />
                        </Space>
                    }
                >
                    {isXssAttackVisible && <XssAttack />}
                </Card>
            </Space>
        </div>
    );
}

export default Pipeline;
