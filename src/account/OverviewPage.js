import React from 'react';

import { HeartOutlined, UserOutlined, FieldTimeOutlined, BoxPlotOutlined, FolderOpenOutlined, ShopOutlined, SignatureOutlined, TruckOutlined, CarryOutOutlined, DollarOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Collapse, Flex } from 'antd';
import { useNavigate } from "react-router-dom";

const OverviewPage = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/some-path`; //Put Path here
        navigate(path);
    }
    const { Meta } = Card;
    return (
        <div>
            <Card
                style={{
                    margin: '20px'
                }}
                actions={[
                    <><HeartOutlined key="wishList" style={{ color: '#F28482' }} /><div>Wish List</div></>,
                    <><UserOutlined key="follwing" style={{ color: '#F28482' }} /><div>Folowing</div></>,
                    <><FieldTimeOutlined key="views "style={{  color: '#F28482'  }}  /><div>Views</div></>,
                    <><BoxPlotOutlined key="coupons" style={{  color: '#F28482'  }}  /><div>Coupons</div></>,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg" />}
                    title="User name"
                />
            </Card>
            <Card
                style={{ margin: '20px' }}  >
                <Meta title="My orders" />
                <Collapse
                    ghost={true}
                    // bordered={false}
                    expandIconPosition="end"
                    items={[
                        {
                            key: '1',
                            children: <Flex gap="10%" align="center" justify="center">
                                <Flex align="center" vertical><FolderOpenOutlined style={{ fontSize: '32px', color: '#F28482' }} key="wishList" />Unpaid</Flex>
                                <Flex align="center" vertical><ShopOutlined style={{ fontSize: '32px', color: '#F28482' }} key="follwing" />To be shipped</Flex>
                                <Flex align="center" vertical><TruckOutlined style={{ fontSize: '32px', color: '#F28482' }} key="views" />Shipped</Flex>
                                <Flex align="center" vertical><CarryOutOutlined style={{ fontSize: '32px', color: '#F28482' }} key="coupons" />To be reviewed</Flex>
                            </Flex>,


                            extra: <Button type="text" onClick={routeChange} style={{ color: '#F28482' }} >View All</Button>,
                        },
                        {
                            key: '2',
                            label: <Flex ><SignatureOutlined style={{ fontSize: '22px', paddingRight: '10px', color: '#F28482' }} />My appeal</Flex>,
                            children: <p>My appeal content</p>,
                        },
                        {
                            key: '3',
                            label: <Flex> <DollarOutlined style={{ fontSize: '22px', paddingRight: '10px', color: '#F28482' }} />In dispute</Flex>,
                            children: <p>In dispute content</p>,
                        },
                    ]}
                />
            </Card>
        </div>
    )
}

export default OverviewPage;