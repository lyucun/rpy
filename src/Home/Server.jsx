import React from 'react';

import { Button, Card, Space } from 'antd'; // 引入 Ant Design 的 Card、Space 和 Button 组件

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
function Server() {
    return (
        <div style={containerStyle}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                {/* 基础配置模块 */}
                <Card
                    title="总服务器配置"
                    style={{
                        ...cardStyle,
                        height: 'auto', // 隐藏时高度为 48px
                        overflow: 'hidden', // 隐藏超出部分
                    }}
                    extra={
                        <Space>
                            <Button>导出配置</Button>
                            <Button>导入配置</Button>
                            <Button>查看状态</Button>
                            <Button>保存</Button>
                            <Button>运行</Button>
                            <Button>停止</Button>
                        </Space>
                    }
                >

                </Card>
            </Space>
        </div>
    );
}

export default Server;
