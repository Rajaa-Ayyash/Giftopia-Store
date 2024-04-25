
import { Button, Card, Input } from 'antd';
import React from 'react';

const EditPassword = () => {
    return (
        <Card title="Edit password">
            <div>Your current password</div>
            <Input placeholder='Edit current password' />
            <div>Your new password</div>
            <Input placeholder='Edit new password' />
            <Button style={{ margin: '10px', color: '#F28482' }} onClick={() => { console.log('Edit') }}>Edit password</Button>
        </Card>
    )
}

export default EditPassword;