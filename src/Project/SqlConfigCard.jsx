import React, { useState } from 'react';
import { Button, Switch, Card, Input, Space, Tooltip } from 'antd'; // 导入需要的 Ant Design 组件
import { UpOutlined, DownOutlined, PlusOutlined, QuestionCircleOutlined } from '@ant-design/icons';

// 样式常量
const cardStyle = {
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    background: '#ffffff',
    transition: 'all 0.3s ease',
};

// SqlConfigCard 组件
function SqlConfigCard() {
    const [isSqlConfigVisible, setIsSqlConfigVisible] = useState(true); // 是否显示 SQL 配置
    const [configRows, setConfigRows] = useState([]); // 存储配置行内容
    const [isSqlActivate, setSqlActivate] = useState(false); // 是否启用 SQL 配置

    // 添加无参配置行
    const addEmptyConfigRow = () => {
        setConfigRows([...configRows, '']); // 添加一个无参配置行
    };

    // 处理输入框内容变化
    const handleInputChange = (index, value) => {
        const newRows = [...configRows];
        newRows[index] = value;
        setConfigRows(newRows);
    };

    // 删除配置行
    const deleteConfigRow = (index) => {
        const newRows = configRows.filter((_, i) => i !== index);
        setConfigRows(newRows);
    };

    return (
        <Card
            title={
                <Space>
                    SQL 配置
                    <Tooltip title="配置 SQL 语句的参数，原网址 test.com 拼接成 test.com and 1=2 ">
                        <QuestionCircleOutlined style={{ color: '#1890ff', cursor: 'pointer' }} />
                    </Tooltip>
                </Space>
            }
            style={{
                ...cardStyle,
                height: isSqlConfigVisible ? 'auto' : '48px',
                overflow: 'hidden',
                marginBottom: '16px',
            }}
            extra={
                <Space>
                    <Switch checked={isSqlActivate} onChange={(checked) => setSqlActivate(checked)} />
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
                    {configRows.map((row, index) => (
                        <div key={index} style={{ marginBottom: '8px', display: 'flex' }}>
                            <Input
                                type="text"
                                placeholder={`配置项 ${index + 1}`}
                                value={row}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                            />
                            <Button
                                type='primary'
                                style={{ marginLeft: '8px' }}
                                onClick={() => deleteConfigRow(index)}
                            >
                                删除
                            </Button>
                        </div>
                    ))}
                    {/* 添加无参配置按钮 */}
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={addEmptyConfigRow}
                        style={{ marginTop: '8px' }}
                    >
                        添加配置
                    </Button>
                </div>
            )}
        </Card>
    );
}

export default SqlConfigCard;
