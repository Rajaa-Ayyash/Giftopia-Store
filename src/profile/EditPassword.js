
import { Button, Card, Input } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';

const EditPassword = () => {
    const [password, setPassword] = useState()

    const updatePassword = async () => {
        try {
            const response = await axios.post('/user', {
                firstName: 'Fred',
                lastName: 'Flintstone'
            });
            if (response.status === '400') {
                console.log('DONE')
                //redirect to a new page
            }
        } catch {
            console.log('ERROR')
        }
    }


    return (
        <Card title="Edit password">
            <div>Your current password</div>
            <Input placeholder='Edit current password' />
            <div>Your new password</div>
            <Input placeholder='Edit new password' />
            <Button style={{ margin: '10px', color: '#F28482' }} onClick={() => updatePassword()}>Edit password</Button>
        </Card>
    )
}

export default EditPassword;