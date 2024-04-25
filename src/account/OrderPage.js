import { Button, Card, Input, Menu, Select, Space, Flex, Collapse, Divider } from 'antd';
import React, { useState } from 'react';

import { DeleteOutlined, FieldTimeOutlined, HeartOutlined, UserOutlined, BoxPlotOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const { Meta } = Card;


const items = [
    {
        label: <div style={{ padding: '10px', color: '#F28482' }}>View All</div>,
    },
    {
        label: <div style={{ padding: '10px', color: '#F28482' }}>To pay</div>,
    },
    {
        label: <div style={{ padding: '10px', color: '#F28482' }}>To ship</div>,
    },
    {
        label: <div style={{ padding: '10px', color: '#F28482' }}>Shipped</div>,
    },
    {
        label: <div style={{ padding: '10px', color: '#F28482' }}>Processed</div>,
    },
]

const OrderPage = () => {
    const { Search } = Input;
    let navigate = useNavigate();
    const [current, setCurrent] = useState('mail');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value, _e, info) => console.log(info?.source, value);

    const routeChange = () => {
        let path = `/`;
        navigate(path);
    }

    return (
        <div>
            <Card
                style={{
                    margin: '20px'
                }}

            >
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                <Flex justify='end'>
                    <Button
                        type="text"
                        icon={<DeleteOutlined style={{ color: '#F28482' }} />}
                        onClick={() => console.log("delete all")}
                    >
                        Delete Orders
                    </Button>
                </Flex>
                <Flex justify='space-between'>
                    <Flex>
                        <Select
                            style={{ width: 100 }}
                            defaultValue="Order"
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'jack',
                                    label: 'orders',
                                },
                            ]}
                        />
                        <Search
                            placeholder="input search text"
                            onSearch={onSearch}
                            style={{
                                width: 300,
                            }}
                        />
                    </Flex>
                    <Select
                        defaultValue="All/Last Year"
                        style={{
                            width: 200,
                        }}
                        onChange={handleChange}
                        options={[
                            {
                                value: 'Orders',
                                label: 'Orders',
                            },
                        ]}
                    />
                </Flex>
            </Card>
            <Card
                style={{ margin: '20px' }}  >
                <Meta title="Expired" />
                <Collapse
                    ghost={true}
                    bordered={false}
                    expandIconPosition="end"
                    items={[
                        {
                            key: 'orderDetails',
                            children: <><Divider />
                                <div>Shop3239004</div>
                                <Flex>
                                    <img style={{ width: '200px' }} src="https://i.pinimg.com/474x/1d/eb/0e/1deb0e4d6a5587c6a472b6bb09ebc6ac.jpg" />
                                    <Divider type="vertical" style={{ height: '200px' }} />
                                    <div style={{ width: '70%' }}>Some data</div>
                                    <Flex align="center" justify='center' vertical style={{ width: '20%' }}>
                                        <div>Total: US $ 4.09</div>
                                        <Button style={{ width: '100%', color: '#F28482' }}>Remove</Button>
                                    </Flex>
                                </Flex>
                            </>,
                            extra:
                                <Flex>
                                    <Flex vertical>
                                        <div>Order date: Apr 4 2020</div>
                                        <div>Order ID: 10223374655453 <Button type="text" onClick={() => { navigator.clipboard.writeText('10223374655453') }}>Copy</Button></div>
                                    </Flex>
                                    <Divider type="vertical" style={{ height: '50px' }} />
                                    <Button type="text" onClick={routeChange} style={{ color: '#F28482' }} > Delete Orders</Button>
                                </Flex>

                        },

                    ]}
                />
            </Card>
        </div>
    )
}
export default OrderPage;
