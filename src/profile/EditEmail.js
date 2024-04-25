
import { Button, Card, Input } from 'antd';
import React from 'react';

const EditEmail = () => {
    return (
        <Card title="Edit email">
            <div>Your current email</div>
            <Input placeholder='Edit current email' />
            <div>Your new email</div>
            <Input placeholder='Edit new email' />
            <Button style={{ margin: '10px', color: '#F28482' }} onClick={() => { console.log('Edit') }}>Edit email</Button>
        </Card>
    )
}

export default EditEmail;