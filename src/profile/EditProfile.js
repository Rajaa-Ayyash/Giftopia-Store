import { Button, Card, Input } from 'antd';
import React from 'react';

const EditProfile = () => {
    return (
        <Card title="Edit profile">
            <div>Your name</div>
            <Input placeholder='Edit your name' />
            <div>Address</div>
            <Input placeholder='Edit your address' />
            <div>Mobile Number</div>
            <Input placeholder='Edit your mobile number' />
            <Button style={{ margin: '10px', color: '#F28482' }} onClick={() => { console.log('Edit') }}>Edit profile</Button>
        </Card>
    )
}

export default EditProfile;