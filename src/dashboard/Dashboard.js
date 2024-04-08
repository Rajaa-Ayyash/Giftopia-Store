import {
  HomeOutlined,
  UserOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons';
import { Flex, Layout } from 'antd';
import React from 'react';
import { DashboardMenu, DashboardTitle } from './styled';

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    <a href="/view-rating">
      Admin list
    </a>
    , '1', <HomeOutlined />),
  getItem('Staff list', '2', <UsergroupAddOutlined />),
  getItem('User list', '3', <UserOutlined />),
];

const Dashboard = () => {
  return (
    <>
      <Sider>
        <Flex align="center" justify='center'>
          <DashboardTitle>Giftopia</DashboardTitle>
        </Flex>
      </Sider>
      <DashboardMenu
        items={items}
      />
    </>
  );
};
export default Dashboard;