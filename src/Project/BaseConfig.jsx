import React from 'react';
import { Input, Switch, Row, Col, InputNumber, Button } from 'antd'; // 引入 Ant Design 的 Input、Switch、Row、Col 和 InputNumber 组件

const inputStyle = {
    width: '100%', // 宽度占满父容器
    borderRadius: '8px', // 圆角

    fontSize: '14px', // 字体大小
    transition: 'border-color 0.3s ease', // 添加过渡效果
};

function BaseConfig() {
    const [isProxyEnabled, setIsProxyEnabled] = React.useState(false); // 状态管理是否开启代理
    const [threadCount, setThreadCount] = React.useState(1); // 状态管理线程数
    // 处理检测按钮点击事件
    const handleCheckLink = () => {
        console.log("检测按钮被点击");
        // 在这里添加检测逻辑
    };
    const handleSaveConfig = () => {
        console.log('保存按钮被点击');
        // 在这里添加检测逻辑
    };

    return (
        <div>
            {/* 第一行：目标网址和是否开启代理 */}
            <Row gutter={16} align="middle" style={{ marginBottom: '16px' }}>
                <Col span={12}>
                    <Input
                        type="text"
                        placeholder="请输入目标网址"
                        style={inputStyle}
                        addonBefore="网址" // 在输入框前面添加“网址”两个字
                        onFocus={(e) => (e.target.style.borderColor = '#4096ff')} // 聚焦时边框颜色变化
                        onBlur={(e) => (e.target.style.borderColor = '#d9d9d9')} // 失焦时边框颜色恢复
                    />
                </Col>
                <Col span={12}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <Button type="primary" onClick={handleCheckLink} style={{ marginRight: '12px' }}>
                            检测
                        </Button>
                        <span style={{ marginRight: '8px' }}>是否开启代理</span>
                        <Switch
                            checked={isProxyEnabled}
                            onChange={(checked) => setIsProxyEnabled(checked)}
                        />
                    </div>
                </Col>
            </Row>
            {
                isProxyEnabled && (
                    <p>代理功能暂未实现</p>
                )
            }

            {/* 第二行：线程数 */}
            <Row gutter={16} align="middle" style={{ marginBottom: '16px' }}>
                <Col span={12}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <span style={{ marginRight: '10px' }}>线程数：</span>
                        <InputNumber
                            min={1} // 最小值为 1
                            max={999} // 最大值为 10
                            value={threadCount}
                            onChange={(value) => setThreadCount(value)}
                        />
                    </div>
                </Col>
                <Col span={12}>
                    {/* 占位，确保布局对齐 */}
                </Col>
            </Row>

            <Button type="primary" onClick={handleSaveConfig} style={{ background: 'green' }}>
                保存
            </Button>
        </div>
    );
}

export default BaseConfig;
