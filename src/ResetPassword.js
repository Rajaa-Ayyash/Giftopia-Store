import { KeyOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Input, Modal } from 'antd';
import { default as React, useState } from 'react';
const ResetPassword = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (

        <>
            <Button style={{ backgroundColor: "pink" }} type="primary" onClick={showModal}>
                Reset password
            </Button>
            <Modal title={<><KeyOutlined style={{ color: "blue", fontSize: "20px" }} /><span>Reset password</span></>} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <UserOutlined style={{ color: "blue", fontSize: "30px" }} />
                <LockOutlined style={{ color: "blue", fontSize: "20px" }} />
                <Input.Password placeholder="input old password" />
                <Input.Password placeholder="input new password" />
                <Input.Password placeholder="confirm new password" />
            </Modal>
        </>

    );
};
export default ResetPassword;