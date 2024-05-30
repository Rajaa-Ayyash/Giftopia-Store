import { Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { useState } from 'react';
import OverviewPage from './OverviewPage';
import OrderPage from './OrderPage';
import SettingsPage from './SettingsPage';
const { Content } = Layout;

function getItem(label, key, children, type) {
    return {
        key,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Account', 'account', [
        getItem(

            'Overview'
            , 'overview'),
        getItem('Order', 'order'),
        getItem('Settings', 'settings')])
];

const AccountPage = () => {

    const renderMenuContent = () => {
        switch (menuKey) {
            case 'overview':
                return <OverviewPage />
            case 'order':
                return <OrderPage />
            case 'settings':
                return <SettingsPage />
            default: return <OverviewPage />
        }
    }

    const [menuKey, setMenuKey] = useState('overview');

    const onClick = (e) => {
        setMenuKey(e.key)
    };

    return (
        <Layout style={{
            minHeight: '100vh',
        }}>
            <Sider theme="light">
                <Menu
                    onClick={onClick}
                    defaultSelectedKeys={['overview']}
                    defaultOpenKeys={['account']}
                    mode="inline"
                    expandIcon={null}
                    items={items}
                />
            </Sider>
            <Layout>
                <Content>
                    {renderMenuContent()}
                </Content>
            </Layout>
        </Layout>
    );
};

export default AccountPage;